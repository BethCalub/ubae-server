'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './service.events';

var ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  info: String,
  process: [String],
  requirements: [String],
  tags: [{
    type: String,
    lowercase: true,
    required: true
  }],
  // dept_id: String,
  active: {
    type: Boolean,
    default: true
  }
});

registerEvents(ServiceSchema);
export default mongoose.model('Service', ServiceSchema);
