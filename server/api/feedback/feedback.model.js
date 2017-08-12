'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './feedback.events';

var FeedbackSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(FeedbackSchema);
export default mongoose.model('Feedback', FeedbackSchema);
