'use strict';

const mongoose = require('../../../config/mongoose').default;
const { UserSchema } = require('./user');
const { Schema } = mongoose;

const DeviceSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  owner: { type: Schema.Types.ObjectId, ref: UserSchema, required: true },
  name: { type: String, required: true },
  value: { type: Number, required: true },
  amountReceived: { type: Number },
  description: { type: String },
  image: { type: String }
}, { timestamps: {} });

module.exports.default = mongoose.model('Device', DeviceSchema);
module.exports.DeviceSchema = DeviceSchema;
