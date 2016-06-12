'use strict';

module.exports.default = (res, next) => (err, result) => {
  if (err) return res.status(err.statusCode || 400).json(err);
  if (typeof next === 'function') return next(result);

  res.status(200).json(result);
};