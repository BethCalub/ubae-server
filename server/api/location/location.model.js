'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './location.events';
var Schema = mongoose.Schema;

var LocationSchema = new mongoose.Schema({
  name: String,
  building: String,
  floor: String,
  room: String,
  tags: [String],
  dept: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    require: true
  },
  active: Boolean
});

registerEvents(LocationSchema);
export default mongoose.model('Location', LocationSchema);
