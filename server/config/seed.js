/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// import Ubae from '../api/ubae/ubae.model';
import Dept from '../api/dept/dept.model';
import Office from '../api/office/office.model';
import User from '../api/user/user.model';
import config from './environment/';
import UbaeData from './seed.data.js';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    Dept.find({}).remove()
      .then(() => {
        Dept.create(UbaeData.departments)
          .then(() => console.log('finished populating Departments'))
          .catch(err => console.log('error populating Departments', err));
      });

    Office.find({}).remove()
      .then(() => {
        Office.create(UbaeData.offices)
          .then(() => console.log('finished populating Offices'))
          .catch(err => console.log('error populating Offices', err));
      });

    User.find({}).remove()
      .then(() => {
        User.create({
          provider: 'local',
          name: 'Test User',
          email: 'test@example.com',
          password: 'test'
        }, {
          provider: 'local',
          role: 'admin',
          name: 'Admin',
          email: 'admin@example.com',
          password: 'admin'
        })
        .then(() => console.log('finished populating Accounts'))
        .catch(err => console.log('error populating Accounts', err));
      });
  }
}
