/**
 * Provider model events
 */

'use strict';

import {EventEmitter} from 'events';
var ProviderEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ProviderEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Provider) {
  for(var e in events) {
    let event = events[e];
    Provider.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    ProviderEvents.emit(event + ':' + doc._id, doc);
    ProviderEvents.emit(event, doc);
  };
}

export {registerEvents};
export default ProviderEvents;
