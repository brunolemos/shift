'use strict';

const FacebookTokenStrategy = require('passport-facebook-token').Strategy;
const config = require('../../config');
const User = require('../../../src/v1/models/user');

const { clientID, clientSecret, callbackURL } = config.integrations.facebook;
const facebookTokenStrategy = new FacebookTokenStrategy({
    clientID,
    clientSecret,
    callbackURL,
    profileFields: ['id', 'email', 'displayName', 'gender']
  }, (token, refreshToken, profile, done) => {
    process.nextTick(() => {
      const email = profile.email || profile.emails[0].value;
      const query = { $or: [{ email }, { 'accounts.facebook.id': profile.id }] };

      const data = {
        'accounts.facebook': {
          _id: profile.id,
          token,
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

module.exports = facebookTokenStrategy;