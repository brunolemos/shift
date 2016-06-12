'use strict';

module.exports = {
  db: {
    url: process.env.MONGODB_URI || 'mongodb://localhost/shift'
  },
  integrations: {
    simplify: {
      publicKey: 'sbpb_MDYzNjdmYjYtOGFmMC00MWQ4LTg4MTEtYzM2YjBmM2VjYTlk',
      privateKey: 'GXUTmeqkkh6jxtouxcZrv3tVLYl4KDr5KCIXldB99AB5YFFQL0ODSXAOkNtXTToq'
    },
    facebook: {
      clientID: '286188441720917',
      clientSecret: 'a7fd4b2cc3b37e1221c455022d36bca0',
      callbackURL: 'http://localhost:3000/v1/auth/facebook/callback'
    }
  }
};
