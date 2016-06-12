'use strict';

const mongoose = require('../../../config/mongoose');
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  device: { type: Schema.Types.ObjectId, ref: 'Device', required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  value: { type: Number, required: true },
  token: { type: String, required: true },
  payment: { type: Object }
}, { timestamps: {} });

module.exports = mongoose.model('Transaction', TransactionSchema);
module.exports.TransactionSchema = TransactionSchema;
