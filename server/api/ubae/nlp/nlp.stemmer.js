'use strict';
import natural from 'natural';
import exp from './dictionary/exceptions';

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


exports.toRegexArrayLStemmed = function(input) {
  natural.LancasterStemmer.attach();
  var keywords = input.tokenizeAndStem();
  var regexArray = [];
  for(var index = 0; index < keywords.length; index++) {
    var regex = new RegExp('^' + keywords[index], 'i');
    regexArray.push(regex);
  }
  return regexArray;
};

exports.toRegexArray = function(input) {
  natural.PorterStemmer.attach();
  var keywords = input;
  var regexArray = [];
  for(var index = 0; index < keywords.length; index++) {
    var regex = '';
    var key = keywords[index];
    if(exp.exceptions.indexOf(key) > -1) {
      regex = new RegExp('^' + key, 'i');
    } else {
      regex = new RegExp('^' + key.stem(), 'i');
    }
    regexArray.push(regex);
  }
  return regexArray;
};
