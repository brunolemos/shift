'use strict';

const User = require('../models/user').default;
const errorHandler = require('../../../lib/error-handler').default;

module.exports = (app) => {
  app.get('/', (req, res) => {
    User.find({}, errorHandler(res));
  });

  app.post('/', (req, res) => {
    new User(req.body).save(errorHandler(res));
  });

  app.get('/:id', (req, res) => {
    User.findById(req.params.id, errorHandler(res));
  });

  app.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, errorHandler(res));
  });
};