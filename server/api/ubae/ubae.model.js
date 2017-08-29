'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './ubae.events';

var UbaeSchema = new mongoose.Schema({
  userinput: String,
  keywords: {
    type: [String],
    lowercase: true
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  resolved: {
    type: Boolean,
    default: false
  },
  archive: {
    type: Boolean,
    default: false
  }
});

registerEvents(UbaeSchema);
export default mongoose.model('Ubae', UbaeSchema);
