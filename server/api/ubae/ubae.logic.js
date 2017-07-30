'use strict';

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
