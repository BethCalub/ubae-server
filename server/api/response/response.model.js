'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './response.events';

var ResponseSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'General',
    lowercase: true,
    required: false
  },
  tags: [{
    type: String,
    required: true,
    lowercase: true
  }],
  active: {
    type: Boolean,
    default: true
  }
});

registerEvents(ResponseSchema);
export default mongoose.model('Response', ResponseSchema);
