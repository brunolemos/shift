'use strict';

const mongoose = require('../../../config/mongoose');
const { DeviceSchema } = require('./device');
const { Schema } = mongoose;
const Device = require('../models/device');

const TransactionSchema = new Schema({
  device: { type: Schema.Types.ObjectId, ref: 'Device', required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  value: { type: Number, required: true }
}, { timestamps: {} });

TransactionSchema.post('save', (doc) => {
  Device.findByIdAndUpdate(doc.device, {$inc: {amountReceived: doc.value}}, {new: true}, console.log);
});

module.exports = mongoose.model('Transaction', TransactionSchema);
module.exports.TransactionSchema = TransactionSchema;
