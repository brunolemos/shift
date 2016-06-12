'use strict';

const mongoose = require('../../../config/mongoose');
const { UserSchema } = require('./user');
const { Schema } = mongoose;

const DeviceSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  uuid: { type: String, index: true, required: true },
  name: { type: String, required: true },
  value: { type: Number, required: true },
  amountReceived: { type: Number, default: 0 },
  description: { type: String },
  image: { type: String }
}, { timestamps: {} });

module.exports = mongoose.model('Device', DeviceSchema);
module.exports.DeviceSchema = DeviceSchema;
