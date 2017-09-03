'use strict';
import swd from './dictionary/swd.js';
import mod from './dictionary/modifiers.js';
import natural from 'natural';

var classifier = new natural.BayesClassifier();

initClassifier();

function initClassifier() {
  classifier.addDocument('School of', 'department');
  classifier.addDocument('Department', 'department');
  classifier.addDocument('Office of', 'office');
  classifier.addDocument('Faculty of', 'office');
  classifier.addDocument('University of', 'university');
  classifier.addDocument('UBAE', 'system');
  classifier.train();
  classifier.save('classifier.json', function(err, classifier) {
    // the classifier is saved to the classifier.json file!
  });
}

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

function toRegexArray(keywords) {
  var regexArray = [];
  for(var index = 0; index < keywords.length; index++) {
    var regex = new RegExp('^' + keywords[index], 'i');
    regexArray.push(regex);
  }
  return regexArray;
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

exports.getQuery = function(input) {
  return {
    command: listSearch(input, mod.commandList),
    classifier: classifier.classify(input),
    modifiers: listSearch(input, mod.locationList),
    keywords: keywordSearch(input),
    regex: toRegexArray(keywordSearch(input)),
    regexLine: new RegExp(keywordSearch(input).join('|'), 'i'),
    stemmed: toRegexArrayStemmed(input)
  };
};
