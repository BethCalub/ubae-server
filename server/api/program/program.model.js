'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './program.events';

var ProgramSchema = new mongoose.Schema({
  name: String,
  acronym: String,
  info: String,
  requirements: [String],
  type: String,
  prerequisite: String,
  duration: String,
  tags: [String],
  dept_id: [String],
  active: Boolean
});

registerEvents(ProgramSchema);
export default mongoose.model('Program', ProgramSchema);
