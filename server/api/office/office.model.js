'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './office.events';

var OfficeSchema = new mongoose.Schema({
  office: String,
  description: String,
  location: {
    bldg: String,
    floor: String,
    room: String,
  },
  tags: [{
    type: String,
    uppercase: true
  }],
  services: [{
    name: String,
    description: String,
    requirements: [String],
    process: [String],
    tags: [{
      type: String,
      uppercase: true
    }]
  }],
  active: Boolean
});

registerEvents(OfficeSchema);
export default mongoose.model('Office', OfficeSchema);
