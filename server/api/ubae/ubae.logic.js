'use strict';

import Dept from '../dept/dept.model';

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

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function getCommandResults(document, getCommand) {
  // var dept = titleCase(story.department);
  // var say = 'Hello, I\'m UBAE';
  switch (getCommand) {
  case 'where':
    // var dept = titleCase(story.department);
    // var location = document.location;
    // var say = 'The main office of the '
    //   + dept + ' is located at '
    //   + location.bldg + ' building '
    //   + location.floor.toLowerCase()
    //   + ' floor Room ' + location.room + '.';
    console.log(document.location);
    return {
      _t: Date.now(),
      // _say: say,
      dept: document.department,
      location: document.location
    };

  // case 'what':
  //   var courses = story.programs;
  //   var progs = [];
  //   var programList = '';
  //   for(var index = 0; index < courses.length; index++) {
  //     var element = courses[index].name;
  //     progs.push(element);
  //   }

  //   for(var i = 0; i < progs.length; i++) {
  //     if(i > progs.length - 2) {
  //       programList = programList + ' and ' + progs[i] + '.';
  //     } else {
  //       programList = programList + ' ' + progs[i] + ',';
  //     }
  //   }

  //   say = 'The courses offered by the '
  //     + dept + ' are the following:' + programList;

  //   return {
  //     _say: say,
  //     dept: story.department,
  //     programs: story.programs,
  //     _t: Date.now()
  //   };

  case 'when':
    return {
      _say: 'This is what I have found.',
      dept: document.department,
      _t: Date.now()
    };

  case 'how':
    return {
      _say: 'This is what I have found.',
      dept: document.department,
      programs: document.programs,
      _t: Date.now()
    };

  default:
    return {
      _say: 'This is what I have found.',
      _t: Date.now(),
      result: document
    };
  }
}

exports.getResults = function(req, res, ubae, userInput, keyArray) {
  Dept.find({
    tags: {
      $all: keyArray
    }
  })
  .exec()
      .then(respondWithResult(res))
    .catch(handleError(res));
  // .exec(function(err, story) {
  //   if(err) return handleError(err);
  //   if(story !== null) {
  //     return res.send({
  //       in: userInput,
  //       cmd: ubae.commands,
  //       mod: ubae.modifiers,
  //       tags: ubae.keywords,
  //       ubae: getCommandResults(story, ubae.commands)
  //     });
  //   } else {
  //     return res.send('No Result');
  //   }
  // });
};