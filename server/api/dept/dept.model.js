'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './dept.events';

var DeptSchema = new mongoose.Schema({
  department: String,
  mission: String,
  objectives: {
    header: String,
    list: [String]},
  tags: [String],
  programs: [{
    name: String,
    requirements: String,
    prereq: String,
    years: Number,
    programType: String,
    objectives: {
      header: String,
      list: [String]},
    tags: [String]
  }],
  active: Boolean
});

registerEvents(DeptSchema);
export default mongoose.model('Dept', DeptSchema);
