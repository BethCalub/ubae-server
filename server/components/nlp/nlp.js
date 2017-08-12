'use strict';
import swd from './dictionary/swd.js';
import mod from './dictionary/modifiers.js';
import natural from 'natural';

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

exports.getKeywords = function(input) {
  return keywordSearch(input);
};

exports.getCommand = function(input) {
  return listSearch(input, mod.commandList);
};

exports.getType = function(input) {
  return listSearch(input, mod.typeList);
};

exports.getQuery = function(input) {
  return {
    keywords: keywordSearch(input),
    commands: listSearch(input, mod.commandList),
    modifiers: listSearch(input, mod.locationList)
  };
};

      // if(ubae.keywords.length > 0) {
      //   var keyRegex = new RegExp(ubae.keywords.join('|'), 'i');
      //   Dept.findOne({ tags: { $all: [keyRegex] } })
      //     .exec(function(err, story) {
      //       if(err) return handleError(err);
      //       if(story !== null) {
      //         return res.send({
      //           in: userInput,
      //           cmd: ubae.commands,
      //           local: ubae.location,
      //           tags: ubae.keywords,
      //           result: ubaeAI.results(story, ubae.commands)
      //         });
      //       } else {
      //         return res.send(ubaeAI.errResults(
      //           'Sorry but I can\'t seem to find anything related'
      //         ));
      //       }
      //     });
      // } else {
      //   return res.send(ubaeAI.errResults(
      //     'Please be more specific'
      //   ));
      // }