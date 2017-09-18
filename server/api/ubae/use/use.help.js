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
  switch (ubae.helpCmd) {
  case 'what':
    return res.send({
      result: ubaeResponse('To search for details, follow this guide: "WHAT [SERVICES, COURSES, REQUIREMENTS] [KEYWORD]". The arrangement of words is not important except for the WHAT command word.')
    });
  case 'when':
    return res.send({
      result: ubaeResponse('To search for an event, follow this guide: "WHEN [KEYWORD]". The arrangement of words is not important except for the WHEN command word.')
    });
  case 'where':
    return res.send({
      result: ubaeResponse('To search for a location, follow this guide: "WHERE [DEPARTMENT, OFFICE] [KEYWORD]". The arrangement of words is not important except for the WHERE command word.')
    });
  case 'how':
    return res.send({
      result: ubaeResponse('To search instructions for a process, follow this guide: "HOW [KEYWORD]". The arrangement of words is not important except for the HOW command word.')
    });
  case 'which':
    return res.send({
      result: ubaeResponse('To search for a office that provide such services, follow this guide: "WHICH  [DEPARTMENT, OFFICE] [KEYWORD]". The arrangement of words is not important except for the WHICH command word.')
    });
  default:
    return res.send({
      result: ubaeResponse('To inquire information regarding the processes, requirements, events and locations in the University, please enter your question starting with WHAT, WHEN, WHERE, HOW or WHICH. You can also ask help for each commands by typing \'help <command>\'. Thank you! :)')
    });
  }
};
