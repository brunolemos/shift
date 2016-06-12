'use strict';

const passport = require('passport');
const config = require('../../../../../config/config');

module.exports = (app) => {
  app.post('/', passport.authenticate('facebook-token', { scope: config.integrations.facebook.scope }), (req, res) => {
    res.json(req.user);
  });

  app.get('/callback', passport.authenticate('facebook-token', { failureRedirect: '/v1/users/me' }), (req, res) => {
    res.redirect('/v1/users/me');
  });
};