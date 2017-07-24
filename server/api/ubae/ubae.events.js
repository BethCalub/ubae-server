/**
 * Ubae model events
 */

'use strict';

import {EventEmitter} from 'events';
var UbaeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
UbaeEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Ubae) {
  for(var e in events) {
    let event = events[e];
    Ubae.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    UbaeEvents.emit(event + ':' + doc._id, doc);
    UbaeEvents.emit(event, doc);
  };
}

export {registerEvents};
export default UbaeEvents;
