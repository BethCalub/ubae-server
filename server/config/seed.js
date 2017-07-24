/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Ubae from '../api/ubae/ubae.model';
import Dept from '../api/dept/dept.model';
import User from '../api/user/user.model';
import config from './environment/';
import UbaeData from './seed.data.js';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    // Ubae.find({}).remove()
    //   .then(() => {
    //     Ubae.create(UbaeData.dept)
    //       .then(() => console.log('finished populating Ubae'))
    //       .catch(err => console.log('error populating Ubae', err));
    //   });

    Dept.find({}).remove()
      .then(() => {
        Dept.create(UbaeData.departments)
          .then(() => console.log('finished populating Dept'))
          .catch(err => console.log('error populating Dept', err));
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
