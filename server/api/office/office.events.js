/**
 * Office model events
 */

'use strict';

import {EventEmitter} from 'events';
var OfficeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OfficeEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Office) {
  for(var e in events) {
    let event = events[e];
    Office.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    OfficeEvents.emit(event + ':' + doc._id, doc);
    OfficeEvents.emit(event, doc);
  };
}

export {registerEvents};
export default OfficeEvents;
