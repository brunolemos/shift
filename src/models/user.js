'use strict';

const mongoose = require('../../config/mongoose').default;
const { Schema } = mongoose;

const AccountSchema = new Schema({
  _id: { type: String, required: true },
  provider: { type: String, required: true },
  token: { type: String, required: true },
  scope: { type: String }
}, { timestamps: {} });

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  accounts: { type: [AccountSchema] }
}, { timestamps: {} });

module.exports.default = mongoose.model('User', UserSchema);
module.exports.AccountSchema = AccountSchema;
module.exports.UserSchema = UserSchema;