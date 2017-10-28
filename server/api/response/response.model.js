'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './response.events';

var ResponseSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    required: true,
    lowercase: true
  }],
  author: {
    type: String,
    default: 'Team UBAE',
    required: false
  },
  added: {
    type: Date,
    default: new Date(Date.now()),
    required: true
  },
  modified: {
    type: Date,
    // default: new Date(Date.now()),
    required: false
  },
  active: {
    type: Boolean,
    default: true
  },
});

registerEvents(ResponseSchema);
export default mongoose.model('Response', ResponseSchema);
