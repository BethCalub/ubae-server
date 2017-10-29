'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './information.events';

var InformationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  details: [{
    type: String,
    required: true
  }],
  type: {
    type: String,
    required: true,
    lowercase: true
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
  startDate: {
    type: Date,
    required: false
  },
  endDate: {
    type: Date,
    required: false
  },
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
    required: false
  },
  active: {
    type: Boolean,
    default: true
  }
});

registerEvents(InformationSchema);
export default mongoose.model('Information', InformationSchema);
