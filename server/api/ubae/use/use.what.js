'use strict';

import Information from '../../information/information.model';
import Feedback from '../../feedback/feedback.model';
import messages from '../../../config/data/message.ubae';

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
      msg = story[0].message;
      return {
        user: ubaeInput(userInput, ubae),
        result: ubaeResponse(msg, story, length),
      };
    }
  } else {
    msg = messages.noResult.what;
    createFeedback(userInput, ubae.command, ubae.classifier, ubae.keywords, msg);
    return {
      result: ubaeResponse(msg, story, length)
    };
  }
}

exports.what = function(req, res, userInput, ubae) {
  return Information.find({
    tags: {
      $all: ubae.stemmed
    }
  }).select('name info type message')
  .exec(function(err, story) {
    return res.send(generateResults(err, story, userInput, ubae));
  });
};
