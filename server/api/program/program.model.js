'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './program.events';

var ProgramSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  acronym: String,
  info: String,
  requirements: [String],
  type: String,
  prerequisite: String,
  duration: String,
  tags: [{
    type: String,
    lowercase: true,
    required: true
  }],
  // dept_id: [String],
  active: {
    type: Boolean,
    default: true
  }
});

registerEvents(ProgramSchema);
export default mongoose.model('Program', ProgramSchema);
