'use strict';

const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db.URI);

mongoose.connection.on('connected', () => console.log(`Database connected at ${config.db.URI}`));
mongoose.connection.on('error', (err) => console.error(`Database error: ${err}`));

module.exports = mongoose;
