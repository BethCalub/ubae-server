'use strict';

import account from './data/account.ubae.js';
import event from './data/event.ubae.js';
import information from './data/information.ubae.js';
import instruction from './data/instruction.ubae.js';
import location from './data/location.ubae.js';
import response from './data/response.ubae.js';

exports.accounts = account.account;
exports.events = event.event;
exports.informations = information.information;
exports.instructions = instruction.instruction;
exports.locations = location.location;
exports.responses = response.response;
