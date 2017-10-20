'use strict';

import messages from '../../../config/data/message.ubae';

function ubaeResponse(message, story, entries) {
  return {
    _entries: entries,
    _say: message,
    _t: Date.now(),
    _res: story
  };
}

exports.help = function(req, res, userInput, ubae) {
  if(!ubae.foulwords) {
    switch (ubae.helpCmd) {
    case 'what':
      return res.send({
        result: ubaeResponse(messages.help.what)
      });
    case 'when':
      return res.send({
        result: ubaeResponse(messages.help.when)
      });
    case 'where':
      return res.send({
        result: ubaeResponse(messages.help.where)
      });
    case 'how':
      return res.send({
        result: ubaeResponse(messages.help.how)
      });
    case 'which':
      return res.send({
        result: ubaeResponse(messages.help.which)
      });
    default:
      return res.send({
        result: ubaeResponse(messages.help.default)
      });
    }
  } else {
    return res.send({
      result: {
        _say: messages.noResult.foulInquiry,
        _t: Date.now()
      }
    });
  }
};
