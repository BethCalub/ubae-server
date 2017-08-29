'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './event.events';

var EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  info: String,
  location: String,
  requirements: String,
  startDate: Date,
  endDate: Date,
  startTime: Date,
  endTime: Date,
  tags: [String],
  active: Boolean
});

registerEvents(EventSchema);
export default mongoose.model('Event', EventSchema);
