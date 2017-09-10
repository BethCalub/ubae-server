'use strict';
import swd from './dictionary/swd.js';
import mod from './dictionary/modifiers.js';
// import cls from './dictionary/classifiers.js';
// import bayes from '../../components/bayes/bayes.js';
import natural from 'natural';

var classifier = new natural.BayesClassifier();

function keywordSearch(input) {
  var tokenizer = new natural.WordTokenizer();
  var word;
  var stopWord;
  var regexStr;
  var regex;
  var cleansedString = input.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
  var stopWords = swd.sw;
  var words = cleansedString.match(/[^\s]+|\s+[^\s+]$/g);
  for(var i = 0; i < words.length; i++) {
    for(var y = 0; y < stopWords.length; y++) {
      word = words[i].replace(/\s+|[^a-z]+/ig, '');
      stopWord = stopWords[y];
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
  return tokenizer.tokenize(cleansedString.replace(/^\s+|\s+$/g, '').toLowerCase());
}

function listSearch(input, list) {
  input = input.toUpperCase()
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .split(' ');
  for(var y = 0; y < list.length; y++) {
    var cur = list[y];
    for(var x = 0; x < input.length; x++) {
      var currentUserInput = input[x];
      if(cur === currentUserInput) {
        return cur.toLowerCase();
      }
    }
  }
}

function toRegexArrayStemmed(input) {
  natural.PorterStemmer.attach();
  var keywords = input.tokenizeAndStem();
  var regexArray = [];
  for(var index = 0; index < keywords.length; index++) {
    var regex = new RegExp('^' + keywords[index], 'i');
    regexArray.push(regex);
  }
  return regexArray;
}

exports.getKeywords = function(input) {
  return keywordSearch(input);
};

exports.getQuery = function(input) {
  return {
    _in: input,
    command: listSearch(input, mod.commandList),
    classifier: 'Unavailable',
    keywords: keywordSearch(input),
    stemmed: toRegexArrayStemmed(input)
  };
};