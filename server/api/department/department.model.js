'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './department.events';
// var Schema = mongoose.Schema;

var DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  info: String,
  acronym: {
    type: String,
    uppercase: true
  },
  type: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    lowercase: true,
    required: true
  }],
  // location: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Location',
  //   require: true
  // },
  active: {
    type: Boolean,
    default: true
  }
});

registerEvents(DepartmentSchema);
export default mongoose.model('Department', DepartmentSchema);
