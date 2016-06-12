'use strict';

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.status(200).json({});
  });

  app.post('/', (req, res) => {
    res.send('POST request to add device');
  });

  app.get('/:id', (req, res) => {
    res.status(200).json({});
  });

  app.put('/:id', function (req, res) {
    res.send('PUT request to update device');
  });
};