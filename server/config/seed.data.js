'use strict';
//Departments
const sbaa = require('./data/dept/dept.sbaa.js');
const sit = require('./data/dept/dept.sit.js');
const slahs = require('./data/dept/dept.slahs.js');
const sod = require('./data/dept/dept.sod.js');
const sol = require('./data/dept/dept.sol.js');
const ste = require('./data/dept/dept.ste.js');
const sea = require('./data/dept/dept.sea.js');
const scjps = require('./data/dept/dept.scjps.js');
const son = require('./data/dept/dept.son.js');
const sns = require('./data/dept/dept.sns.js');
const sihtm = require('./data/dept/dept.sihtm.js');

//Offices

exports.departments = [
  sbaa.sbaa,
  scjps.scjps,
  sod.sod,
  sea.sea,
  sit.sit,
  sihtm.sihtm,
  sol.sol,
  slahs.slahs,
  sns.sns,
  son.son,
  ste.ste
];

exports.offices = [];
