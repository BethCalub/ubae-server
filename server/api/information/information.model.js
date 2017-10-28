'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './information.events';

var InformationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  info: {
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
  author: {
    type: String,
    default: 'Team UBAE',
    required: true
  },
  added: {
    type: Date,
    default: new Date(Date.now()),
    required: true
  },
  modified: {
    type: Date,
    default: new Date(Date.now()),
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

registerEvents(InformationSchema);
export default mongoose.model('Information', InformationSchema);
