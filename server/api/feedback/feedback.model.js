'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './feedback.events';

var FeedbackSchema = new mongoose.Schema({
  userinput: {
    required: true,
    type: String
  },
  command: String,
  modifier: String,
  keywords: [{
    type: String,
    lowercase: true
  }],
  timestamp: {
    type: Date,
    default: Date.now()
  },
  response: String,
  resolved: {
    type: Boolean,
    default: false
  },
  result: {
    type: Boolean,
    default: true
  },
  archive: {
    type: Boolean,
    default: false
  }
});

registerEvents(FeedbackSchema);
export default mongoose.model('Feedback', FeedbackSchema);
