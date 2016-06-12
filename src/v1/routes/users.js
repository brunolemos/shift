'use strict';

const passport = require('passport');
const User = require('../models/user');
const Device = require('../models/device');
const Transaction = require('../models/transaction');
const errorHandler = require('../../../lib/error-handler');
const ensureLogin = require('../middlewares/ensure-login');

module.exports = (app) => {
  app.get('/', (req, res) => {
    User.find(req.query || {}, errorHandler(res));
  });

  app.get('/me', ensureLogin, (req, res) => {
    res.json(req.user || {});
  });

  app.post('/', (req, res) => {
    new User(req.body).save(errorHandler(res));
  });

  app.get('/:id', (req, res) => {
    User.findById(req.params.id, errorHandler(res));
  });

  app.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, errorHandler(res));
  });

  app.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, errorHandler(res));
  });

  // Get user devices (history)
  app.get('/:id/devices', (req, res) => {
    Device.find({ owner: req.params.id }, errorHandler(res));
  });

  // Get user transactions (history)
  app.get('/:id/transactions', (req, res) => {
    Transaction.find({ owner: req.params.id}).populate(['owner', 'device']).exec(errorHandler(res));
  });
};
