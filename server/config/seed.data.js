'use strict';
//Departments
const sbaa = require('./data/dept/dept.sbaa.js');
const scjps = require('./data/dept/dept.scjps.js');
const sea = require('./data/dept/dept.sea.js');
const sihtm = require('./data/dept/dept.sihtm.js');
const sit = require('./data/dept/dept.sit.js');
const slahs = require('./data/dept/dept.slahs.js');
const sns = require('./data/dept/dept.sns.js');
const sod = require('./data/dept/dept.sod.js');
const sol = require('./data/dept/dept.sol.js');
const son = require('./data/dept/dept.son.js');
const ste = require('./data/dept/dept.ste.js');

//Offices
exports.departments = [
  sbaa.sbaa,
  scjps.scjps,
  sea.sea,
  sihtm.sihtm,
  sit.sit,
  slahs.slahs,
  sns.sns,
  sod.sod,
  sol.sol,
  son.son,
  ste.ste
];

exports.offices = [];
