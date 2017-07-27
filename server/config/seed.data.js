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
