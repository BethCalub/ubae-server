'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './instruction.events';

var InstructionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  process: [{
    type: String,
    required: true
  }],
  type: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  },
  tags: [{
    type: String,
    lowercase: true,
    required: true
  }],
  active: {
    type: Boolean,
    default: true
  }
});

registerEvents(InstructionSchema);
export default mongoose.model('Instruction', InstructionSchema);
