/**
 * Program model events
 */

'use strict';

import {EventEmitter} from 'events';
var ProgramEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ProgramEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Program) {
  for(var e in events) {
    let event = events[e];
    Program.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    ProgramEvents.emit(event + ':' + doc._id, doc);
    ProgramEvents.emit(event, doc);
  };
}

export {registerEvents};
export default ProgramEvents;
