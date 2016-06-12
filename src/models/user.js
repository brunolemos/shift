'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/shift');

const AccountSchema = new Schema({
  _id: { type: String, required: true },
  provider: { type: String, required: true },
  token: { type: String, required: true },
  scope: { type: String }
}, { timestamps: true });

const UserSchema = new Schema({
  deviceId: { type: Schema.Types.ObjectId },
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String }
}, { timestamps: {} });

module.exports = mongoose.model('User', UserSchema);