var help = {
  default: 'To inquire information regarding the processes, requirements, events and locations in the University, please enter your question starting with WHAT, WHEN, WHERE, HOW or WHICH. You can also ask help for each commands by typing \'help <command>\'. Thank you! :)',
  what: 'To search for details, follow this guide: "WHAT [SERVICES, COURSES, REQUIREMENTS] [KEYWORD]". The arrangement of words is not important except for the WHAT command word.',
  when: 'To search for an event, follow this guide: "WHEN [KEYWORD]". The arrangement of words is not important except for the WHEN command word.',
  where: 'To search for a location, follow this guide: "WHERE [DEPARTMENT, SCHOOL, COLLEGE, OFFICE] [KEYWORD]". The arrangement of words is not important except for the WHERE command word.',
  how: 'To search instructions for a process, follow this guide: "HOW [KEYWORD]". The arrangement of words is not important except for the HOW command word.',
  which: 'To search for a office that provide such services, follow this guide: "WHICH  [DEPARTMENT, OFFICE] [KEYWORD]". The arrangement of words is not important except for the WHICH command word.'
};

var noResult = {
  noKeyword: 'Sorry! I cannot find any keywords on your inquiry. Type \'help\' to ask for assistance. Please try again. :)',
  noInquiry: 'Sorry! I cannot search anything from an empty inquiry. Type \'help\' to ask for assistance. Please try again. :)',
  default: 'Sorry! :( I can\'t find anything related',
  what: 'Sorry! :( I can\'t find anything related. Type \'help what\' to ask for assistance',
  when: 'Sorry! :( I can\'t find anything related. Type \'help when\' to ask for assistance',
  where: 'Sorry! :( I can\'t find anything related. Type \'help where\' to ask for assistance',
  how: 'Sorry! :( I can\'t find anything related. Type \'help how\' to ask for assistance',
  which: 'Sorry! :( I can\'t find anything related. Type \'help which\' to ask for assistance',
  responses: 'Sorry! :( I don\'t have a response for that yet'
};

exports.help = help;
exports.noResult = noResult;
