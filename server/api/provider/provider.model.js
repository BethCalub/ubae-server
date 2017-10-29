'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './provider.events';

var ProviderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  offer: [{
    type: String,
    required: true
  }],
  type: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
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

registerEvents(ProviderSchema);
export default mongoose.model('Provider', ProviderSchema);
