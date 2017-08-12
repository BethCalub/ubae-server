'use strict';

import mongoose from 'mongoose';
import {
  registerEvents
} from './dept.events';

var programSchema = new mongoose.Schema({
  name: {
    type: String
  },
  requirements: String,
  prereq: String,
  years: Number,
  programType: String,
  objectives: {
    header: String,
    list: [String]
  },
  tags: [{
    type: String,
    uppercase: true
  }]
});

var DeptSchema = new mongoose.Schema({
  department: {
    type: String,
    uppercase: true
  },
  mission: String,
  objectives: {
    header: String,
    list: [String]
  },
  location: {
    bldg: {
      type: String,
      uppercase: true
    },
    floor: String,
    room: String
  },
  tags: [{
    type: String,
    uppercase: true
  }],
  programs: [programSchema],
  active: Boolean
});


registerEvents(DeptSchema);
export default mongoose.model('Dept', DeptSchema);
