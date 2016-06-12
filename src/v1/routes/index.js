'use strict';

module.exports = (app) => {

  // index
  app.get('/v1', (req, res) => {
    res.status(200).json({});
  });

  // login
  app.post('/v1/login', (req, res) => {
    res.send('POST request to login');
  });

  // logout
  app.post('/v1/logout', (req, res) => {
    res.send('POST request to logout');
  });

  // search beacons
  app.get('/v1/beacons', (req, res) => {
    res.status(200).json({});
  });

  // add beacon
  app.post('/v1/beacon', (req, res) => {
    res.send('POST request to add beacon');
  });

  // show beacon
  app.get('/v1/beacon/:id', (req, res) => {
    res.status(200).json({});
  });

  // update beacon
  app.put('/v1/beacon/:id', function (req, res) {
    res.send('PUT request to update beacon');
  });

  // add transaction
  app.post('/v1/transaction', (req, res) => {
    res.send('POST request to add transaction');
  });

  // show transaction
  app.get('/v1/transaction/:id', (req, res) => {
    res.status(200).json({});
  });

  // show all transactions
  app.get('/v1/transactions', (req, res) => {
    res.status(200).json({});
  });

  // update transaction
  app.put('/v1/transaction/:id', function (req, res) {
    res.send('PUT request to update transaction');
  });

};
