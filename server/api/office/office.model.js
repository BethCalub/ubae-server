'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './office.events';

var OfficeSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(OfficeSchema);
export default mongoose.model('Office', OfficeSchema);
