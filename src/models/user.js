'use strict';

const mongoose = require('../../config/mongoose');
const { Schema } = mongoose;

const AccountSchema = new Schema({
  _id: { type: String, required: true },
  provider: { type: String, required: true },
  token: { type: String, required: true },
  scope: { type: String }
}, { timestamps: {} });

const UserSchema = new Schema({
  deviceId: { type: Schema.Types.ObjectId },
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  accounts: { type: [AccountSchema] }
}, { timestamps: {} });

module.exports = mongoose.model('User', UserSchema);