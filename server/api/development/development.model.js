'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './development.events';

var DevelopmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  details: {
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

registerEvents(DevelopmentSchema);
export default mongoose.model('Development', DevelopmentSchema);
