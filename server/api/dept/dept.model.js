'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './dept.events';

var DeptSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(DeptSchema);
export default mongoose.model('Dept', DeptSchema);
