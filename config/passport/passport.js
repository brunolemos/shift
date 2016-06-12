'use strict';

module.exports = (app) => {
  const passport = require('passport');
  const facebookStrategy = require('./strategies/facebook');

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  passport.use(facebookStrategy);
  app.use(passport.initialize());
  app.use(passport.session());
};