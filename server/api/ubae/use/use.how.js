'use strict';

function ubaeResponse(message, story, entries) {
  return {
    _entries: entries,
    _say: message,
    _t: Date.now(),
    _res: story
  };
}

exports.how = function(req, res, userInput, ubae) {
  var msg = '';
  return res.send({
    result: ubaeResponse('You asked for ' + ubae.command)
  });
};
