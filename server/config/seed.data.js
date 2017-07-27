'use strict';
const sbaa = require('./data/dept.sbaa.js');
const sit = require('./data/dept.sit.js');
const slahs = require('./data/dept.slahs.js');
const sod = require('./data/dept.sod.js');
const sol = require('./data/dept.sol.js');
const ste = require('./data/dept.ste.js');
const sea = require('./data/dept.sea.js');
const scjps = require('./data/dept.scjps.js');
const son = require('./data/dept.son.js');
const sns = require('./data/dept.sns.js');
const sihtm = require('./data/dept.sihtm.js');

exports.departments = [sbaa.sbaa, scjps.scjps, sod.sod, sea.sea, sit.sit, sihtm.sihtm, sol.sol, slahs.slahs, sns.sns, son.son, ste.ste];
