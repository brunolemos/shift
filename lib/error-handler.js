'use strict';

module.exports = (res, next) => (err, result) => {
  if (err) return res.status(err.statusCode || 400).json(err);
  if (typeof next === 'function') return next(result);

  res.json(result);
};