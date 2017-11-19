'use strict';

import Ubaguio from '../../information/information.model';
import Feedback from '../../feedback/feedback.model';
import ErrorMessage from '../../../config/data/message.ubae';

console.log('Hello World');

function updateCount(id, count) {
  Ubaguio.findOneAndUpdate({_id: id}, {
    searched: count + 1
  }, {
    new: true,
    upsert: true,
    setDefaultsOnInsert: true,
    runValidators: true
  }).exec()
  .then(() => console.log('Successfully updated search count.'))
  .catch(err => console.log('Failed to update search count.', err));
}

function newFeedback(_in, cmd, tag) {
  Feedback.find({
    keywords: {
      $all: tag
    }
  }).exec(function(err, data) {
    if(err) throw err;
    if(data.length < 1) {
      Feedback.create({
        userinput: _in,
        command: cmd,
        keywords: tag,
        timestamp: new Date(Date.now())
      })
      .then(() => console.log('Successfully added feedback.'))
      .catch(err => console.log('Failed adding feedback.', err));
    }
  });
}

function ubaeResponse(message, story, entries) {
  return {
    _entries: entries,
    _say: message,
    _t: new Date(Date.now()),
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

function results(story, userInput, ubae) {
  var msg = '';
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
      msg = story[0].message;
      updateCount(story[0]._id, story[0].searched);
      return {
        user: ubaeInput(userInput, ubae),
        result: ubaeResponse(msg, story, length),
      };
    }
  } else {
    msg = ErrorMessage.noResult.when;
    newFeedback(userInput, ubae.command, ubae.keywords);
    return {
      result: ubaeResponse(msg, story, length)
    };
  }
}

exports.searchUbaguio = function(req, res, userInput, ubae) {
  if(!ubae.foulwords) {
    return Ubaguio.find({
      type: ubae.command,
      active: true,
      tags: {
        $all: ubae.stemmed
      }
    })
    .exec(function(err, story) {
      if(err) throw err;
      return res.send(results(story, userInput, ubae));
    });
  } else {
    return res.send({
      result: {
        _say: ErrorMessage.noResult.foulInquiry,
        _t: new Date(Date.now())
      }
    });
  }
};
