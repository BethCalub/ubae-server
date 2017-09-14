/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Locations from '../api/location/location.model';
// import Departments from '../api/department/department.model';
// import Programs from '../api/program/program.model';
// import Services from '../api/service/service.model';
import config from './environment/';
import UbaeData from './seed.data.js';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    Locations.find({}).remove()
      .then(() => {
        Locations.create(UbaeData.locations)
          .then(() => console.log('finished populating Locations'))
          .catch(err => console.log('error populating Locations', err));
      });

    // Departments.find({}).remove()
    //   .then(() => {
    //     Departments.create(UbaeData.departments)
    //       .then(() => console.log('finished populating Departments'))
    //       .catch(err => console.log('error populating Departments', err));
    //   });

    // Programs.find({}).remove()
    //   .then(() => {
    //     Programs.create(UbaeData.programs)
    //       .then(() => console.log('finished populating Programs'))
    //       .catch(err => console.log('error populating Programs', err));
    //   });

    // Services.find({}).remove()
    //   .then(() => {
    //     Services.create(UbaeData.services)
    //       .then(() => console.log('finished populating Services'))
    //       .catch(err => console.log('error populating Services', err));
    //   });

    User.find({}).remove()
      .then(() => {
        User.create(UbaeData.accounts)
        .then(() => console.log('finished populating Accounts'))
        .catch(err => console.log('error populating Accounts', err));
      });
  }
}
