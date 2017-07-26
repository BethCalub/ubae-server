/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// import Ubae from '../api/ubae/ubae.model';
import Dept from '../api/dept/dept.model';
import User from '../api/user/user.model';
import config from './environment/';
import UbaeData from './seed.data.js';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    Dept.find({}).remove()
      .then(() => {
        Dept.create(UbaeData.departments)
          .then(() => console.log('finished populating Department'))
          .catch(err => console.log('error populating Department', err));
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
        .then(() => console.log('finished populating users'))
        .catch(err => console.log('error populating users', err));
      });
  }
}
