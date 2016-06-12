'use strict';

module.exports = (req, res, next) => {
  if (!(req.user || {})._id) return res.status(401).json({});

  next();
};
