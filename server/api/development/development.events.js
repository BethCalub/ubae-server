/**
 * Development model events
 */

'use strict';

import {EventEmitter} from 'events';
var DevelopmentEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DevelopmentEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Development) {
  for(var e in events) {
    let event = events[e];
    Development.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    DevelopmentEvents.emit(event + ':' + doc._id, doc);
    DevelopmentEvents.emit(event, doc);
  };
}

export {registerEvents};
export default DevelopmentEvents;
