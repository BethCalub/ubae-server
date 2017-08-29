'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './location.events';
// var Schema = mongoose.Schema;

var LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  building: String,
  floor: String,
  room: String,
  tags: [{
    type: String,
    lowercase: true,
    required: true
  }],
  // dept: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Department',
  //   require: true
  // },
  active: {
    type: Boolean,
    default: true
  }
});

registerEvents(LocationSchema);
export default mongoose.model('Location', LocationSchema);
