'use strict';

const mongoose = require('../../../config/mongoose');
const { Schema } = mongoose;

const FacebookAccountSchema = new Schema({
  _id: { type: String, required: true },
  token: { type: String, required: true },
  refreshToken: { type: String },
  scope: { type: String }
});

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String },
  phone: { type: String },
  accounts: {
    facebook: { type: FacebookAccountSchema }
  }
}, { timestamps: {} });

module.exports = mongoose.model('User', UserSchema);
module.exports.AccountSchema = FacebookAccountSchema;
module.exports.UserSchema = UserSchema;
