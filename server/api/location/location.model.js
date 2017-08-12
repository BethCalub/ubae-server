'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './location.events';

var LocationSchema = new mongoose.Schema({
  name: String,
  building: String,
  floor: String,
  room: String,
  tags: [String],
  dept_id: String,
  active: Boolean
});

registerEvents(LocationSchema);
export default mongoose.model('Location', LocationSchema);
