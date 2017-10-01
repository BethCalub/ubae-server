var help = {
  default: 'To inquire information regarding the processes, requirements, events and locations in the University, please enter your question starting with WHAT, WHEN, WHERE, HOW or WHICH. You can also ask help for each commands by typing \'help <command>\'. Thank you! :)',
  what: 'To search for details, follow this guide: "WHAT [SERVICES, COURSES, REQUIREMENTS] [KEYWORD]". The arrangement of words is not important except for the WHAT command which should come first.',
  when: 'To search for an event, follow this guide: "WHEN [KEYWORD]". The arrangement of words is not important except for the WHEN command which should come first.',
  where: 'To search for a location, follow this guide: "WHERE [DEPARTMENT, SCHOOL, COLLEGE, OFFICE] [KEYWORD]". The arrangement of words is not important except for the WHERE command which should come first.',
  how: 'To search instructions for a process, follow this guide: "HOW [KEYWORD]". The arrangement of words is not important except for the HOW command which should come first.',
  which: 'To search for a office that provide such services, follow this guide: "WHICH  [DEPARTMENT, OFFICE] [KEYWORD]". The arrangement of words is not important except for the WHICH command which should come first.'
};

var noResult = {
  noKeyword: 'Sorry! I cannot find any keywords from your inquiry. Please make sure that you entered the correct spelling or type \'help\' to ask for assistance and try again. :)',
  noInquiry: 'Sorry! I cannot search anything from an empty inquiry. Please ask me something about the University or if you\'re confused, type \'help\' to ask for assistance and try again. :)',
  foulInquiry: 'I don\'t like talking to people who are very impolite!!! -_- Do you kiss your mother with that mouth???',
  default: 'Sorry! :( I can\'t find anything related. Type \'help\' for assistance. ',
  what: 'Sorry! :( I can\'t find the information you\'re looking for. Type \'help what\' to ask for assistance about a certain department, service, course etc. Ex. (What are the requirements for enrollment?, What is ARC?). ',
  when: 'Sorry! :( I can\'t find the event you\'re looking for. Type \'help when\' to ask for assistance about an event within the university. Ex. (When is the midterm exam?). ',
  where: 'Sorry! :( I can\'t find the location you\'re looking for. Type \'help where\' to ask for assistance pertaining to a place in the university Ex. (Where is the ARC office).  ',
  how: 'Sorry! :( I can\'t find anything related. Type \'help how\' to ask for assistance pertaining to a certain process or service in the university. Ex. (How do I enroll if I am a freshmen?)',
  which: 'Sorry! :( I can\'t find anything related. Type \'help which\' to ask for assistance about the place where a certain service or course is offered. Ex. (Which department offers BSIT?).',
  responses: 'Sorry! :( I don\'t have a response for that yet, I\'m still learning. :) '
};

exports.help = help;
exports.noResult = noResult;