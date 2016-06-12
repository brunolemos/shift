'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

require('./src/v1/routes/_routes')(app);

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address.replace('::', 'localhost');
  const port = server.address().port;
  console.log(`Running at http://${host}:${port}`);
});

server.on('error', (e) => {
  const host = e.address;
  const port = e.port;

  console.error(`Failed to run at http://${host}:${port} (${e.code})`);
});

server.timeout = 0;

module.exports = app;
