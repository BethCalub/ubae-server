'use strict';

import swd from './ubae.swd.js';
import natural from 'natural';
// import compromise from 'compromise';

const commandList = ['WHERE', 'HOW', 'WHAT', 'WHICH'];
const typeList = ['OFFICE', 'DEPARTMENT', 'SCHOOL', 'DEPT'];
const programList = ['SERVICES', 'COURSES', 'PROGRAMS'];

function stemmer(input) {
  var tokenizer = new natural.WordTokenizer();
  var word;
  var stopWord;
  var regexStr;
  var regex;
  var cleansedString = input.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
  var stopWords = swd.sw();
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

function wordSearch(input, list) {
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

function titleCase(str) {
  var dispose = ['of', 'and', 'in'];
  return str.toLowerCase().split(' ')
    .map(function(word) {
      if(dispose.indexOf(word) > -1) {
        return word.replace(word[0], word[0]);
      } else {
        return word.replace(word[0], word[0].toUpperCase());
      }
    })
    .join(' ');
}

exports.getKeywords = function(input) {
  return stemmer(input);
};

exports.getCommand = function(input) {
  return wordSearch(input, commandList);
};

exports.getType = function(input) {
  return wordSearch(input, typeList);
};

exports.getQuery = function(input) {
  return {
    keywords: stemmer(input),
    commands: wordSearch(input, commandList),
    location: wordSearch(input, typeList),
    program: wordSearch(input, programList)
  };
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
  var dept = titleCase(story.department);
  var say = 'Hello, I\'m UBAE';
  switch (getCommand) {
  case 'where':
    var location = story.location;
    say = 'The main office of the '
      + dept + ' is located at '
      + location.bldg + ' building '
      + location.floor.toLowerCase()
      + ' floor Room ' + location.room + '.';

    return {
      _t: Date.now(),
      _say: say,
      dept: story.department,
      location: story.location
    };

  case 'what':
    var courses = story.programs;
    var progs = [];
    var programList = '';
    for(var index = 0; index < courses.length; index++) {
      var element = courses[index].name;
      progs.push(element);
    }

    for(var i = 0; i < progs.length; i++) {
      if(i > progs.length - 2) {
        programList = programList + ' and ' + progs[i] + '.';
      } else {
        programList = programList + ' ' + progs[i] + ',';
      }
    }

    say = 'The courses offered by the '
      + dept + ' are the following:' + programList;

    // return {
    //   _say: say,
    //   dept: story.department,
    //   programs: progs,
    //   _t: Date.now()
    // };

    return {
      _say: say,
      dept: story.department,
      programs: story.programs,
      _t: Date.now()
    };

  // case 'which':
  //   return = {
  //     _say: 'This is what I have found.',
  //     dept: story.department,
  //     _t: Date.now()
  //   };

  // case 'how':
  //   return = {
  //     _say: 'This is what I have found.',
  //     dept: story.department,
  //     programs: story.programs,
  //     _t: Date.now()
  //   };

  default:
    return {
      _say: 'Sorry but i can\'t find what you\'re looking for.',
      _t: Date.now()
    };
  }
};
