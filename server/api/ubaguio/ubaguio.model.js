'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './ubaguio.events';

var UbaguioSchema = new mongoose.Schema({
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
      default: new Date(Date.now()),
      required: true
    }
  },
  stats: {
    active: {
      type: Boolean,
      default: true
    },
    searched: {
      type: Number,
      default: 0,
      required: false
    }
  }
});

registerEvents(UbaguioSchema);
export default mongoose.model('Ubaguio', UbaguioSchema);
