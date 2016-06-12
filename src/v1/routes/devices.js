'use strict';

const Device = require('../models/device').default;
const errorHandler = require('../../../lib/error-handler').default;

module.exports = (app) => {
  app.get('/', (req, res) => {
    Device.find({}).populate('owner').exec(errorHandler(res));
  });

  app.post('/', (req, res) => {
    new Device(req.body).save(errorHandler(res));
  });

  app.get('/:id', (req, res) => {
    Device.findById(req.params.id, errorHandler(res));
  });

  app.get('/uuid/:uuid', (req, res) => {
    Device.findOne({ 'uuid': req.params.uuid}, errorHandler(res));
  });

  app.put('/:id', (req, res) => {
    Device.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, errorHandler(res));
  });

  app.delete('/:id', (req, res) => {
    Device.findByIdAndRemove(req.params.id, errorHandler(res));
  });
};
