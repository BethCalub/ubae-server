'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './process.events';

var ProcessSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(ProcessSchema);
export default mongoose.model('Process', ProcessSchema);
