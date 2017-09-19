'use strict';

import Response from '../../response/response.model';
import Feedback from '../../feedback/feedback.model';
import messages from '../../../config/data/message.ubae';

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
  return Response.findOne({
    active: true,
    tags: {
      $all: ubae.regex
    }
  })
  .select('message')
  .exec(function(err, story) {
    var msg = '';
    if(err) throw err;
    var length = 1;
    try {
      msg = story.message;
      return res.send({
        user: ubaeInput(userInput, ubae),
        result: ubaeResponse(msg, story, length),
      });
    } catch(error) {
      msg = messages.noResult.responses;
      // createFeedback(userInput, ubae.command, ubae.classifier, ubae.keywords, msg);
      return res.send({
        result: ubaeResponse(msg, story, length)
      });
    }
  });
};
