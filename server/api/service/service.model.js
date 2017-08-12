'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './service.events';

var ServiceSchema = new mongoose.Schema({
  name: String,
  info: String,
  process: [String],
  requirements: [String],
  tags: [String],
  dept_id: String,
  active: Boolean
});

registerEvents(ServiceSchema);
export default mongoose.model('Service', ServiceSchema);
