'use strict';

exports.listSearch = function(input, list) {
  input = input.toUpperCase()
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .split(' ');
  for(var y = 0; y < list.length; y++) {
    var cur = list[y];
    for(var x = 0; x < input.length; x++) {
      var currentUserInput = input[x];
      if(cur.toUpperCase() === currentUserInput) {
        return cur.toLowerCase();
      }
    }
  }
};

exports.foulSearch = function(input, list) {
  var foul = false;
  input = input.toUpperCase()
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .split(' ');
  for(var y = 0; y < list.length; y++) {
    var cur = list[y];
    for(var x = 0; x < input.length; x++) {
      var currentUserInput = input[x];
      if(cur.toUpperCase() === currentUserInput) {
        foul = true;
      }
    }
  }
  return foul;
};

exports.helpSearch = function(input) {
  input = input.toUpperCase()
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .split(' ');
  if(input[0] === 'HELP') {
    return true;
  } else {
    return false;
  }
};

exports.commandSearch = function(input, list) {
  input = input.toUpperCase()
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .split(' ');
  for(var y = 0; y < list.length; y++) {
    var cur = list[y];
    var currentUserInput = input[0];
    if(cur === currentUserInput) {
      return cur.toLowerCase();
    }
  }
};
