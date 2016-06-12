'use strict';

const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('../../config');
const User = require('../../../src/v1/models/user');

const { clientID, clientSecret, callbackURL } = config.integrations.facebook;
const facebookStrategy = new FacebookStrategy({
    clientID,
    clientSecret,
    callbackURL,
    profileFields: ['id', 'email', 'displayName', 'gender']
  }, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      const email = profile.email || profile.emails[0].value;
      const query = { $or: [{ email }, { 'accounts.facebook.id': profile.id }] };

      const data = {
        'accounts.facebook': {
          _id: profile.id,
          accessToken,
          refreshToken
        }
      };

      if (email) data.email = email;
      if (profile.displayName) data.name = profile.displayName;
      if (profile.gender) data.gender = profile.gender;

      User.findOneAndUpdate(query, data, { upsert: true }, done);
    });
  }
);

module.exports = facebookStrategy;  