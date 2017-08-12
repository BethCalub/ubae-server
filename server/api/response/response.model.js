'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './response.events';

var ResponseSchema = new mongoose.Schema({
  message: String,
  type: String,
  tags: String,
  active: Boolean
});

registerEvents(ResponseSchema);
export default mongoose.model('Response', ResponseSchema);
