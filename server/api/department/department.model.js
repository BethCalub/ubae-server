'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './department.events';

var DepartmentSchema = new mongoose.Schema({
  name: String,
  info: String,
  acronym: String,
  type: String,
  tags: [String],
  active: Boolean
});

registerEvents(DepartmentSchema);
export default mongoose.model('Department', DepartmentSchema);
