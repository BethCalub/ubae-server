'use strict';

function ubaeResponse(message, story, entries) {
  return {
    _entries: entries,
    _say: message,
    _t: Date.now(),
    _res: story
  };
}

exports.help = function(req, res, userInput, ubae) {
  switch (ubae.command) {
  case 'what':
    return res.send({
      result: ubaeResponse('Help What')
    });
  case 'when':
    return res.send({
      result: ubaeResponse('Help When')
    });
  case 'where':
    return res.send({
      result: ubaeResponse('To search for a location, follow this guide: "WHERE [DEPARTMENT, OFFICE] [KEYWORD]". The arrangement of words is not importand except for the WHERE command word.')
    });
  case 'how':
    return res.send({
      result: ubaeResponse('Help How')
    });
  case 'which':
    return res.send({
      result: ubaeResponse('Help Which')
    });
  default:
    return res.send({
      result: ubaeResponse('To inquire for information related to the University. Your questions must start with WHAT, WHEN, WHERE, HOW, or WHICH.')
    });
  }
};
