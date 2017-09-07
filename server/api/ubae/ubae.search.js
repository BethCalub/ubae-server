'use strict';

import Response from '../response/response.model';
import Feedback from '../feedback/feedback.model';
import Location from '../location/location.model';

// function respondWithResult(res, statusCode) {
//   statusCode = statusCode || 200;
//   return function(entity) {
//     if(entity) {
//       return res.status(statusCode).json(entity);
//     }
//     return null;
//   };
// }

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function createFeedback(_in, cmd, mod, tag, ubaeresponse = '') {
  Feedback.create({
    userinput: _in,
    command: cmd,
    modifier: mod,
    keywords: tag,
    response: ubaeresponse,
    timestamp: Date.now()
  })
  .then(() => console.log('Successfully added feedback.'))
  .catch(err => console.log('Failed adding feedback.', err));
}

function ubaeResponse(message, story, entries) {
  return {
    _entries: entries,
    _say: message,
    _t: Date.now(),
    _res: story
  };
}

function ubaeInput(userInput, ubae) {
  return {
    in: userInput,
    cmd: ubae.command,
    mod: ubae.modifiers,
    tags: ubae.keywords,
  };
}

function generateResults(err, story, userInput, ubae) {
  var msg = '';
  if(err) throw err;
  var length = story.length;
  if(story.length > 0) {
    if(story.length > 1) {
      msg = 'I found ' + story.length +
        ' entries. For now let\'s try to make it more specific. :)';
      return {
        user: ubaeInput(userInput, ubae),
        result: ubaeResponse(msg, story, length),
      };
    } else {
      // msg = 'This is what I have found. :)';
      msg = 'The ' + story[0].name + 'is located at ' + story[0].building + ' ' +
      story[0].floor + ' Floor, Room ' + story[0].room + '.';
      return {
        user: ubaeInput(userInput, ubae),
        result: ubaeResponse(msg, story, length),
      };
    }
  } else {
    msg = 'Sorry! :( but I can\'t find anything related';
    createFeedback(userInput, ubae.command, ubae.classifier, ubae.keywords, msg);
    return {
      result: ubaeResponse(msg, story, length)
    };
  }
}

exports.searchWhat = function(req, res, userInput, ubae) {
  var msg = '';
  return res.send({
    result: ubaeResponse('You asked for what.')
  });
};

exports.searchWhen = function(req, res, userInput, ubae) {
  var msg = '';
  return res.send({
    result: ubaeResponse('You asked for when.')
  });
};

exports.searchWhere = function(req, res, userInput, ubae) {
  return Location.find({
    tags: {
      $all: ubae.stemmed
    }
  }).exec(function(err, story) {
    // var msg = 'The ' + story[0].name + 'is located at ' + story[0].building + ' ' +
    // story[0].floor + ' Floor, Room ' + story[0].room + '.';
    return res.send(generateResults(err, story, userInput, ubae));
    // return res.send('Hello');
  });
};

exports.searchHow = function(req, res, userInput, ubae) {
  var msg = '';
  return res.send({
    result: ubaeResponse('You asked for how.')
  });
};

exports.searchHelp = function(req, res, userInput, ubae) {
  var msg = '';
  return res.send({
    result: ubaeResponse('You asked for help.')
  });
};

exports.searchResponse = function(req, res, userInput, ubae) {
  return Response.find({
    active: true,
    tags: {
      $all: ubae.stemmed
    }
  })
  .select('message')
  .exec(function(err, story) {
    var msg = '';
    if(err) throw err;
    var length = story.length;
    if(story.length > 0) {
      if(story.length > 1) {
        msg = 'I found ' + story.length +
          ' entries. For now let\'s try to make it more specific. :)';
        return res.send({
          user: ubaeInput(userInput, ubae),
          result: ubaeResponse(msg, story, length),
        });
      } else {
        msg = story[0].message;
        return res.send({
          user: ubaeInput(userInput, ubae),
          result: ubaeResponse(msg, story, length),
        });
      }
    } else {
      msg = 'Sorry! :( but I can\'t find anything related';
      createFeedback(userInput, ubae.command, ubae.classifier, ubae.keywords, msg);
      return res.send({
        result: ubaeResponse(msg, story, length)
      });
    }
  });
};
