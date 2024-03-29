'use strict';

const Device = require('../models/device');
const Transaction = require('../models/transaction');
const errorHandler = require('../../../lib/error-handler');

module.exports = (app) => {
  app.get('/', (req, res) => {
    Device.find(req.query || {}).populate('owner').exec(errorHandler(res));
  });

  app.post('/', (req, res) => {
    new Device(req.body).save(errorHandler(res));
  });

  app.get('/:id', (req, res) => {
    Device.findById(req.params.id).populate('owner').exec(errorHandler(res));
  });

  app.put('/:id', (req, res) => {
    Device.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, errorHandler(res));
  });

  app.delete('/:id', (req, res) => {
    Device.findByIdAndRemove(req.params.id, errorHandler(res));
  });

  // Get device transactions (history)
  app.get('/:id/transactions', (req, res) => {
    Transaction.find({ device: req.params.id}).populate(['owner', 'device']).exec(errorHandler(res));
  });
};
