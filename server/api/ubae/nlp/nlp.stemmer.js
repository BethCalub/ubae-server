'use strict';
import natural from 'natural';

exports.toRegexArrayStemmed = function(input) {
  natural.PorterStemmer.attach();
  var keywords = input.tokenizeAndStem();
  var regexArray = [];
  for(var index = 0; index < keywords.length; index++) {
    var regex = new RegExp('^' + keywords[index], 'i');
    regexArray.push(regex);
  }
  return regexArray;
};

exports.toRegexArray = function(input) {
  var keywords = input;
  var regexArray = [];
  for(var index = 0; index < keywords.length; index++) {
    var regex = new RegExp('^' + keywords[index], 'i');
    regexArray.push(regex);
  }
  return regexArray;
};
