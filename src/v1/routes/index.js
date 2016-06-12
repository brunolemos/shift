'use strict';

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json(true);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.json(true);
  });
};
