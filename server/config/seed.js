/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
// import Locations from '../api/location/location.model';
// import Feedbacks from '../api/feedback/feedback.model';
// import Instructions from '../api/instruction/instruction.model';
import Informations from '../api/information/information.model';
// import Providers from '../api/provider/provider.model';
// import Events from '../api/event/event.model';
import Responses from '../api/response/response.model';
import config from './environment/';
import UbaeData from './seed.data.js';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    // Locations.find({}).remove()
    //   .then(() => {
    //     Locations.create(UbaeData.locations)
    //       .then(() => console.log('finished populating Locations'))
    //       .catch(err => console.log('error populating Locations', err));
    //   });
    
    // // Feedbacks.find({}).remove()
    // //   .then(() => {
    // //     console.log('finished deleting Feedbacks');
    // //   });

    // Instructions.find({}).remove()
    //   .then(() => {
    //     Instructions.create(UbaeData.instructions)
    //       .then(() => console.log('finished populating Instructions'))
    //       .catch(err => console.log('error populating Instructions', err));
    //   });

    // Providers.find({}).remove()
    //   .then(() => {
    //     Providers.create(UbaeData.providers)
    //       .then(() => console.log('finished populating Providers'))
    //       .catch(err => console.log('error populating Providers', err));
    //   });  

    Responses.find({}).remove()
      .then(() => {
        Responses.create(UbaeData.responses)
          .then(() => console.log('finished populating Responses'))
          .catch(err => console.log('error populating Responses', err));
      });
      
    Informations.find({}).remove()
      .then(() => {
        Informations.create(UbaeData.informations)
          .then(() => console.log('finished populating Informations'))
          .catch(err => console.log('error populating Informations', err));
        Informations.create(UbaeData.events)
          .then(() => console.log('finished populating Events'))
          .catch(err => console.log('error populating Events', err));
        Informations.create(UbaeData.locations)
          .then(() => console.log('finished populating Locations'))
          .catch(err => console.log('error populating Locations', err));
        Informations.create(UbaeData.instructions)
          .then(() => console.log('finished populating Instructions'))
          .catch(err => console.log('error populating Instructions', err));
        Informations.create(UbaeData.providers)
          .then(() => console.log('finished populating Providers'))
          .catch(err => console.log('error populating Providers', err));
      });
    
    // Events.find({}).remove()
    //   .then(() => {
    //     Events.create(UbaeData.events)
    //       .then(() => console.log('finished populating Events'))
    //       .catch(err => console.log('error populating Events', err));
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
