'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './feedback.events';

var FeedbackSchema = new mongoose.Schema({
  userinput: {
    required: true,
    type: String
  },
  command: String,

  keywords: [{
    type: String,
    lowercase: true
  }],
  timestamp: {
    type: Date,
    default: new Date(Date.now())
  },
  author: {
    type: String,
    required: false
  },
  resolved: {
    type: Boolean,
    default: false
  },
  archive: {
    type: Boolean,
    default: false
  },
  searched: {
    type: Number,
    default: 0,
    required: false
  }
});

registerEvents(FeedbackSchema);
export default mongoose.model('Feedback', FeedbackSchema);
