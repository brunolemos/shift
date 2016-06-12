'use strict';

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.status(200).json({});
  });

  app.post('/login', (req, res) => {
    res.send('POST request to login');
  });

  app.post('/logout', (req, res) => {
    res.send('POST request to logout');
  });
};
