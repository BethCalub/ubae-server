/**
 * Information model events
 */

'use strict';

import {EventEmitter} from 'events';
var InformationEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
InformationEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Information) {
  for(var e in events) {
    let event = events[e];
    Information.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    InformationEvents.emit(event + ':' + doc._id, doc);
    InformationEvents.emit(event, doc);
  };
}

export {registerEvents};
export default InformationEvents;
