'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './ubae.events';

var UbaeSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(UbaeSchema);
export default mongoose.model('Ubae', UbaeSchema);
