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
  created: {
    author: {
      type: String,
      default: 'Team UBAE',
      required: true
    },
    date: {
      type: Date,
      default: new Date(Date.now()),
      required: true
    }
  },
  modified: {
    author: {
      type: String,
      required: false
    },
    date: {
      type: Date,
      required: false
    }
  },
  archived: {
    author: {
      type: String,
      required: false
    },
    date: {
      type: Date,
      required: false
    }
  },
  active: {
    type: Boolean,
    default: true,
    required: true
  },
  searched: {
    type: Number,
    default: 0,
    required: false
  }
});

registerEvents(ResponseSchema);
export default mongoose.model('Response', ResponseSchema);
