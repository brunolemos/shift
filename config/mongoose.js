'use strict';

const mongoose = require('mongoose');

var uristring = process.env.MONGODB_URI ||
                'mongodb://localhost/shift';

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

module.exports.default = mongoose;
