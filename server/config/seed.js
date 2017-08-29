/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// import Ubae from '../api/ubae/ubae.model';
import Dept from '../api/dept/dept.model';
import Office from '../api/office/office.model';
import User from '../api/user/user.model';
import Locations from '../api/location/location.model';
import Departments from '../api/department/department.model';
import Programs from '../api/program/program.model';
import Services from '../api/service/service.model';
import config from './environment/';
import UbaeData from './seed.data.js';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    Dept.find({}).remove()
      .then(() => {
        Dept.create(UbaeData.depts)
          .then(() => console.log('finished populating Departments'))
          .catch(err => console.log('error populating Departments', err));
      });

    Office.find({}).remove()
      .then(() => {
        Office.create(UbaeData.offices)
          .then(() => console.log('finished populating Offices'))
          .catch(err => console.log('error populating Offices', err));
      });

    Locations.find({}).remove()
      .then(() => {
        Locations.create(UbaeData.locations)
          .then(() => console.log('finished populating Locations'))
          .catch(err => console.log('error populating Locations', err));
      });

    Departments.find({}).remove()
      .then(() => {
        Departments.create(UbaeData.departments)
          .then(() => console.log('finished populating Departments'))
          .catch(err => console.log('error populating Departments', err));
      });

    Programs.find({}).remove()
      .then(() => {
        Programs.create(UbaeData.programs)
          .then(() => console.log('finished populating Programs'))
          .catch(err => console.log('error populating Programs', err));
      });

    Services.find({}).remove()
      .then(() => {
        Services.create(UbaeData.services)
          .then(() => console.log('finished populating Services'))
          .catch(err => console.log('error populating Services', err));
      });

    User.find({}).remove()
      .then(() => {
        User.create({
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
        })
        .then(() => console.log('finished populating Accounts'))
        .catch(err => console.log('error populating Accounts', err));
      });
  }
}
