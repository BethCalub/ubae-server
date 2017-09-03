'use strict';

import Response from '../response/response.model';
import Feedback from '../feedback/feedback.model';

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

function ubaeResponse(message) {
  return {
    _say: message,
    _t: Date.now()
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
  var msg = '';
  return res.send({
    result: ubaeResponse('You asked for where.')
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
  var msg = '';
  return Response.findOne({
    tags: {
      $all: ubae.regex
    }
  }).exec(function(err, story) {
    if(err) return handleError(err);
    if(story !== null) {
      return res.send({
        user: ubaeInput(userInput, ubae),
        result: ubaeResponse(story.message)
      });
    } else {
      msg = 'Sorry! but I can\'t find anything related';
      createFeedback(userInput, ubae.command, ubae.classifier, ubae.keywords, msg);
      return res.send({
        result: ubaeResponse(msg)
      });
    }
  });
};
