/* eslint no-magic-numbers: "off" */
'use strict';

const argv = require('minimist')(process.argv.slice(2));

const root = {
  thinList: 100,
  pct75: 0.75,
  pct125: 1.25,
  error: 1000,
  pulse: {
    on: true,
    interval: 30000 // milliseconds
  },
  billcloser: false,
  blocked: {
    on: false,
  },
  cache: {
    on: false,
  },
};

const regions = {
  prod: {
    env: 'PROD',
    port: 8000,
    dburl: 'localhost:27017/expense',
    billcloser: true,
    blocked: {
      on: true,
      threshold: 50 // milliseconds
    },
    cache: {
      on: true,
    },
    log: {
      path: 'C:\\Java\\logs\\ExpenseTracker.log',
      period: '1m',
      count: 12
    },
  },
  dev: {
    env: 'DEV',
    port: 8800,
    dburl: 'localhost:27017/test',
    sqlite: 'C:\\Java\\SQLite\\Data\\Prod - v2017.03.13.db',
    billcloser: true,
    log: {
      path: 'C:\\Java\\logs\\ExpenseTracker-Test.log',
      period: '1m',
      count: 12
    },
  },
};

const cfg = {};
const loadConfig = function () {
  const region = (argv.region && regions[argv.region]) ? argv.region : 'dev';

  Object.assign(cfg, root, regions[region]);
};

loadConfig();

module.exports = cfg;
