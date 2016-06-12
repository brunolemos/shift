'use strict';

module.exports = {
  db: {
    url: process.env.MONGODB_URI || 'mongodb://localhost/shift'
  },
  integrations: {
    facebook: {
      clientID: '286188441720917',
      clientSecret: 'a7fd4b2cc3b37e1221c455022d36bca0',
      callbackURL: 'http://localhost:3000/v1/auth/facebook/callback',
      scope: ['public_profile', 'email', 'user_birthday', 'manage_pages']
    }
  }
};
