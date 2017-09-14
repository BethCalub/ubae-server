'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './location.events';

var LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    lowercase: true,
    required: true
  }],
  active: {
    type: Boolean,
    default: true
  }
});

registerEvents(LocationSchema);
export default mongoose.model('Location', LocationSchema);
