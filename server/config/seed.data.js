'use strict';
//Departments
import sbaa from './data/dept/dept.sbaa.js';
import scjps from './data/dept/dept.scjps.js';
import sea from './data/dept/dept.sea.js';
import sihtm from './data/dept/dept.sihtm.js';
import sit from './data/dept/dept.sit.js';
import slahs from './data/dept/dept.slahs.js';
import sns from './data/dept/dept.sns.js';
import sod from './data/dept/dept.sod.js';
import sol from './data/dept/dept.sol.js';
import son from './data/dept/dept.son.js';
import ste from './data/dept/dept.ste.js';

//Offices
import arc from './data/office/office.arc.js';
import athletics from './data/office/office.athletics.js';
import ccsd from './data/office/office.ccsd.js';
import clinic from './data/office/office.clinic.js';
import ecos from './data/office/office.ecos.js';
import larc from './data/office/office.larc.js';
import library from './data/office/office.library.js';
import maps from './data/office/office.maps.js';
import mis from './data/office/office.mis.js';
import osa from './data/office/office.osa.js';
import rndc from './data/office/office.rndc.js';
import sas from './data/office/office.sas.js';
import security from './data/office/office.security.js';

//Locations
import location from './data/location.ubae.js';

//Departments
import department from './data/department.ubae.js';

//Services
import service from './data/services.ubae.js';

//Programs
import program from './data/program.ubae.js';

//Instructions
import instruction from './data/instruction.ubae.js';

import information from './data/information.ubae.js';

import event from './data/event.ubae.js';

import response from './data/response.ubae.js';

exports.accounts = [
  {
    provider: 'local',
    role: 'admin',
    name: 'Administrator',
    email: 'admin@ubae.com',
    password: 'admin'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Earmix',
    email: 'earmix@ubae.com',
    password: 'earmix'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Zorab',
    email: 'zorab@ubae.com',
    password: 'zorab'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Peniel',
    email: 'peniel@ubae.com',
    password: 'peniel'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Stephanie',
    email: 'steph@ubae.com',
    password: 'steph'
  }
];

//Exports Department
exports.depts = [
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

exports.departments = department.department;
exports.locations = location.location;
exports.services = service.service;
exports.programs = program.program;
exports.instructions = instruction.instruction;
exports.informations = information.information;
exports.events = event.event;
exports.responses = response.response;
