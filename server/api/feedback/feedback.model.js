'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './feedback.events';

var FeedbackSchema = new mongoose.Schema({
  name: String,
  message: String,
  timestamp: Date,
  status: Boolean
});

registerEvents(FeedbackSchema);
export default mongoose.model('Feedback', FeedbackSchema);
