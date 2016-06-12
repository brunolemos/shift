'use strict';

const Device = require('../models/device');
const Transaction = require('../models/transaction');
const simplify = require('../../../config/simplify');
const errorHandler = require('../../../lib/error-handler');

module.exports = (app) => {
  app.get('/', (req, res) => {
    Transaction.find({}).populate('owner').exec(errorHandler(res));
  });

  app.post('/', (req, res) => {
    const params = req.body;
    simplify.payment.create({
      amount: params.value,
      token: params.token,
      description: params.description,
      currency: 'USD'
    }, function (errorSimplify, data) {
      if (errorSimplify || !data) {
        console.error(`Failed to create payment ${errorSimplify.data.error.message}`, errorSimplify);
        return errorHandler(res)(errorSimplify, data);
      }

      console.log('Payment: ' + data.paymentStatus, data.id, data);

      params.payment = data || {};

      new Transaction(params).save((errorTransaction, transaction) => {
        if (errorTransaction || !transaction) return errorHandler(res)(errorTransaction, transaction);

        Device.findByIdAndUpdate(transaction.device, {
          $inc: { amountReceived: transaction.value }
        }, { new: true }, (errorDevice, device) => {
          if (errorDevice || !device) {
            console.error('Failed to get device from transaction', errorDevice);
            return errorHandler(res)(errorDevice, device);
          }

          transaction.device = device;
          errorHandler(res)(null, transaction);
        });
      });
    });
  });

  app.get('/:id', (req, res) => {
    Transaction.findById(req.params.id, errorHandler(res));
  });

  app.delete('/:id', (req, res) => {
    Transaction.findByIdAndRemove(req.params.id, errorHandler(res));
  });

};
