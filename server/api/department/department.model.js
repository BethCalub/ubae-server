'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './department.events';
var Schema = mongoose.Schema;

var DepartmentSchema = new mongoose.Schema({
  name: String,
  info: String,
  acronym: String,
  type: String,
  tags: [String],
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
    require: true
  },
  active: Boolean
});

registerEvents(DepartmentSchema);
export default mongoose.model('Department', DepartmentSchema);
