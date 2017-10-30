/**
 * Ubaguio model events
 */

'use strict';

import {EventEmitter} from 'events';
var UbaguioEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
UbaguioEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Ubaguio) {
  for(var e in events) {
    let event = events[e];
    Ubaguio.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    UbaguioEvents.emit(event + ':' + doc._id, doc);
    UbaguioEvents.emit(event, doc);
  };
}

export {registerEvents};
export default UbaguioEvents;
