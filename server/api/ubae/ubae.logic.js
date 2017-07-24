'use strict';

import swd from './ubae.swd.js';
import natural from 'natural';

exports.getKeywords = function(normalized) {
  var tokenizer = new natural.WordTokenizer();
  return tokenizer.tokenize(normalized);
};

exports.commandSearch = function(req, res) {
  req = req.toUpperCase();
  req = req.replace(/[^\w\s]|_/g, '');
  req = req.replace(/\s+/g, ' ');
  req = req.split(' ');
  var commandList = ['WHERE', 'HOW', 'WHAT', 'WHICH'];
  for(var commandIndex = 0; commandIndex < commandList.length; commandIndex++) {
    var currentreq = commandList[commandIndex];
    for(var inputIndex = 0; inputIndex < req.length; inputIndex++) {
      var currentUserInput = req[inputIndex];
      if(currentreq === currentUserInput) {
        return currentreq.toLowerCase();
      }
    }
  }
};

exports.stemmer = function(sentence) {
  var word;
  var stopWord;
  var regexStr;
  var regex;
  var cleansedString = sentence.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
  var stopWords = swd.sw();
  var words = cleansedString.match(/[^\s]+|\s+[^\s+]$/g);
  for(var wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
    for(var stopWordIndex = 0; stopWordIndex < stopWords.length; stopWordIndex++) {
      word = words[wordsIndex].replace(/\s+|[^a-z]+/ig, '');
      stopWord = stopWords[stopWordIndex];
      if(word.toLowerCase() === stopWord) {
        regexStr = '^\\s*' + stopWord + '\\s*$';
        regexStr += '|^\\s*' + stopWord + '\\s+';
        regexStr += '|\\s+' + stopWord + '\\s*$';
        regexStr += '|\\s+' + stopWord + '\\s+';
        regex = new RegExp(regexStr, 'ig');
        cleansedString = cleansedString.replace(regex, ' ');
      }
    }
  }
  return cleansedString.replace(/^\s+|\s+$/g, '').toLowerCase();
};

exports.errResults = function(message) {
  return {
    result: {
      _say: message,
      _t: Date.now()
    }
  };
};

exports.results = function(story, getCommand) {
  var result;
  //switch
  switch (getCommand) {
  case 'where':
    result = {
      _say: 'This is what I have found.',
      office: story.officename,
      dept: story.department,
      bldg: story.location.building,
      flr: story.location.floor,
      rm: story.location.room,
      _t: Date.now()
    };
    break;
  case 'which':
    result = {
      _say: 'This is what I have found.',
      office: story.officename,
      dept: story.department,
      _t: Date.now()
    };
    break;
  case 'what':
    result = {
      _say: 'This is what I have found.',
      office: story.officename,
      dept: story.department,
      _t: Date.now()
    };
    break;
  default:
    result = {
      _say: 'Sorry but i can\'t find what you\'re looking for.',
      _t: Date.now()
    };
    break;
  }
  return result;
};
