'use strict';

const swd = require('./swd.js');
const natural = require('natural');

var a = ['a', 'A', 'TAG', 'a', 'Tag', 'tag', 'a', 'b', 'c', 'd', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
var y = '1. This is the first step., 2. This is the second step., 3. This is the third step.';


console.log('Trimmed: ', trimEntries(y));
console.log('Trimmed: ', trimEntries(JSON.stringify(a)));


function trimEntries(input) {
  var array = input.split(',');
  var result = [];
  for(var index = 0; index < array.length; index++) {
    var element = array[index];
    element = element.replace(/"|\[|\]/g, '');
    result.push(element.trim());
  }
  return result;
}

