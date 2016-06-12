'use strict';

const Simplify = require('simplify-commerce');
const config = require('./config');

module.exports = Simplify.getClient({
    publicKey: config.integrations.simplify.publicKey,
    privateKey: config.integrations.simplify.privateKey
});
