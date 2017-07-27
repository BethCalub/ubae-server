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
  tags: [String],
  services: [{
    name: String,
    description: String,
    requirements: [String],
    process: [String],
    tags: [String]
  }],
  active: Boolean
});

registerEvents(OfficeSchema);
export default mongoose.model('Office', OfficeSchema);
