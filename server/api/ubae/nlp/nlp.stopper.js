'use strict';

import swd from './dictionary/swd.js';
import natural from 'natural';

// exports.keywordSearch = function(input) {
//   var tokenizer = new natural.WordTokenizer();
//   var word;
//   var stopWord;
//   var regexStr;
//   var regex;
//   var cleansedString = input.replace(/[^\w\s]|_/g, ' ').replace(/\s+/g, ' ');
//   var stopWords = swd.sw;
//   var words = cleansedString.match(/[^\s]+|\s+[^\s+]$/g);
//   for(var i = 0; i < words.length; i++) {
//     for(var y = 0; y < stopWords.length; y++) {
//       word = words[i].replace(/\s+|[^a-z]+/ig, '');
//       stopWord = stopWords[y];
//       if(word.toLowerCase() === stopWord) {
//         regexStr = '^\\s*' + stopWord + '\\s*$';
//         regexStr += '|^\\s*' + stopWord + '\\s+';
//         regexStr += '|\\s+' + stopWord + '\\s*$';
//         regexStr += '|\\s+' + stopWord + '\\s+';
//         regex = new RegExp(regexStr, 'ig');
//         cleansedString = cleansedString.replace(regex, ' ');
//       }
//     }
//   }
//   return tokenizer.tokenize(cleansedString.replace(/^\s+|\s+$/g, '').toLowerCase());
// };

function stopper(input) {
  var tokenizer = new natural.WordTokenizer();
  var word;
  var stopWord;
  var regexStr;
  var regex;
  var cleansedString = input.replace(/[^\w\s]|_/g, ' ').replace(/\s+/g, ' ');
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

exports.keywordSearch = function(input) {
  var array = stopper(input);
  var result = [];
  for(var index = 0; index < array.length; index++) {
    var element = array[index].toLowerCase();
    if(result.indexOf(element) < 0) {
      result.push(element);
    }
  }
  if(result.length > 0) {
    return result;
  } else {
    return '';
  }
};
