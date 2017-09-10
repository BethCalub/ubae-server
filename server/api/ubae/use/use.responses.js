'use strict';

import Response from '../../response/response.model';
import Feedback from '../../feedback/feedback.model';

function ubaeInput(userInput, ubae) {
  return {
    in: userInput,
    cmd: ubae.command,
    mod: ubae.modifiers,
    tags: ubae.keywords,
  };
}

function ubaeResponse(message, story, entries) {
  return {
    _entries: entries,
    _say: message,
    _t: Date.now(),
    _res: story
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

exports.response = function(req, res, userInput, ubae) {
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
