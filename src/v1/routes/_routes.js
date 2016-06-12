'use strict';

const express = require('express');
const requireDir = require('require-dir');

function registerRoutesFromRequireDir(app, routePath, obj) {
  if (typeof routePath !== 'string') return;
  if (typeof obj !== 'object' && typeof obj !== 'function') return;

  if (typeof obj === 'object') {
    for (const item in obj) {
      if (obj[item] && item[0] !== '_') {
        const prefix = item === 'index' ? routePath : `${routePath}/${item}`;
        registerRoutesFromRequireDir(app, prefix, obj[item]);
      }
    }

    return;
  }

  const router = express.Router();

  // Require and initialize the route to add its functionality to router
  obj(router);

  // Add router to the speficied route name in the app
  app.use(routePath, router);
}

// Initialize all routes
module.exports = (app) => {
  const files = requireDir('./', { recurse: true });
  registerRoutesFromRequireDir(app, '/v1', files);
};
