'use strict';

const Transaction = require('../models/transaction').default;
const errorHandler = require('../../../lib/error-handler').default;

module.exports = (app) => {
  app.get('/', (req, res) => {
    Transaction.find({}).populate('owner').exec(errorHandler(res));
  });

  app.post('/', (req, res) => {
    new Transaction(req.body).save(errorHandler(res));
  });

  app.get('/:id', (req, res) => {
    Transaction.findById(req.params.id, errorHandler(res));
  });

  app.put('/:id', function (req, res) {
    Transaction.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, errorHandler(res));
  });

  app.delete('/:id', (req, res) => {
    Transaction.findByIdAndRemove(req.params.id, errorHandler(res));
  });

};
