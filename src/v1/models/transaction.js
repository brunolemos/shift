'use strict';

const mongoose = require('../../../config/mongoose');
const { DeviceSchema } = require('./device');
const { Schema } = mongoose;
const Device = require('../models/device');

var Simplify = require("simplify-commerce"),
client = Simplify.getClient({
    publicKey: 'sbpb_MDYzNjdmYjYtOGFmMC00MWQ4LTg4MTEtYzM2YjBmM2VjYTlk',
    privateKey: 'GXUTmeqkkh6jxtouxcZrv3tVLYl4KDr5KCIXldB99AB5YFFQL0ODSXAOkNtXTToq'
});

// client.payment.create(function(data) => {
//     amount : "1000",
//     token : "f21da65e-f0ab-45cb-b8e6-40b493c3671f",
//     description : "payment description",
//     currency : "USD"
// }, function(errData, data){
//     if(errData){
//         console.error("Error Message: " + errData.data.error.message);
//         // handle the error
//         return;
//     }
//     console.log("Payment Status: " + data.paymentStatus);
// });

const TransactionSchema = new Schema({
  device: { type: Schema.Types.ObjectId, ref: 'Device', required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  value: { type: Number, required: true },
  token: { type: String, required: true },
}, { timestamps: {} });

TransactionSchema.post('save', (doc) => {
  Device.findByIdAndUpdate(doc.device, {$inc: {amountReceived: doc.value}}, {new: true}, console.log);
  Simplify.pay(doc);
});

module.exports = mongoose.model('Transaction', TransactionSchema);
module.exports.TransactionSchema = TransactionSchema;
