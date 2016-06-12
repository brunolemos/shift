'use strict';

const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db.url);

mongoose.connection.on('connected', () => console.log(`Database connected at ${config.db.url}`));
mongoose.connection.on('error', (err) => console.error(`Database error: ${err}`));

module.exports = mongoose;
