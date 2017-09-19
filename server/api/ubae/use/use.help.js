'use strict';

import helpMsg from '../../../config/data/help.ubae';

function ubaeResponse(message, story, entries) {
  return {
    _entries: entries,
    _say: message,
    _t: Date.now(),
    _res: story
  };
}

exports.help = function(req, res, userInput, ubae) {
  switch (ubae.helpCmd) {
  case 'what':
    return res.send({
      result: ubaeResponse(helpMsg.help.what)
    });
  case 'when':
    return res.send({
      result: ubaeResponse(helpMsg.help.when)
    });
  case 'where':
    return res.send({
      result: ubaeResponse(helpMsg.help.where)
    });
  case 'how':
    return res.send({
      result: ubaeResponse(helpMsg.help.how)
    });
  case 'which':
    return res.send({
      result: ubaeResponse(helpMsg.help.which)
    });
  default:
    return res.send({
      result: ubaeResponse(helpMsg.help.default)
    });
  }
};
