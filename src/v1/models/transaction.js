'use strict';

const mongoose = require('../../../config/mongoose').default;
const { DeviceSchema } = require('./device');
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  device: { type: Schema.Types.ObjectId, ref: 'Device', required: true },
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  value: { type: Number, required: true },
  amountReceived: { type: Number }
}, { timestamps: {} });

module.exports.default = mongoose.model('Transaction', TransactionSchema);
module.exports.TransactionSchema = TransactionSchema;
