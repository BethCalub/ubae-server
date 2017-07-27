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
const arc = require('./data/office/office.arc.js');
const athletics = require('./data/office/office.athletics.js');
const ccsd = require('./data/office/office.ccsd.js');
const clinic = require('./data/office/office.clinic.js');
const ecos = require('./data/office/office.ecos.js');
const larc = require('./data/office/office.larc.js');
const library = require('./data/office/office.library.js');
const maps = require('./data/office/office.maps.js');
const mis = require('./data/office/office.mis.js');
const osa = require('./data/office/office.osa.js');
const rndc = require('./data/office/office.rndc.js');
const sas = require('./data/office/office.sas.js');
const security = require('./data/office/office.security.js');

//Exports Department
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

//Exports Offices
exports.offices = [
  arc.arc,
  athletics.athletics,
  ccsd.ccsd,
  clinic.clinic,
  ecos.ecos,
  larc.larc,
  library.library,
  maps.maps,
  mis.mis,
  osa.osa,
  rndc.rndc,
  sas.sas,
  security.security
];
