'use strict';

exports.removeDuplicate = function(array) {
  var result = [];
  for(var index = 0; index < array.length; index++) {
    var element = array[index].toLowerCase();
    if(result.indexOf(element) < 0) {
      result.push(element);
    }
  }
  return result;
};

exports.trimEntries = function(input) {
  var array = input.split(',');
  var result = [];
  for(var index = 0; index < array.length; index++) {
    var element = array[index];
    element = element.replace(/"|\[|\]/g, '');
    result.push(element.trim());
  }
  return result;
};

exports.trimArrayEntries = function(input) {
  input = input.toString();
  var array = input.split(',');
  var result = [];
  for(var index = 0; index < array.length; index++) {
    var element = array[index];
    result.push(element.trim());
  }
  return result;
}
