'use strict';
exports.security = {
  office: 'Security Office',
  description: 'The UB-Security Department is an importnant are within support services. It has 3 Full-time officers, 1 Chief security Officer, 1 Night Security Officer, 1 Administrative Officer, 60 strong bodied student Security Marshalls, 3 Lady Student Secretaries and 10 Licensed Security Guards.',
  location: {
    bldg: 'Building Name',
    floor: 'Floor',
    room: 'Room'
  },
  tags: ['Security Office', 'Security'],
  services: [{
    name: 'Investigate complaints, offenses, reports, and any other unusual or suspicious activities in the campus',
    description: 'The Security Department conducts investigation of various crimes or offenses that happened inside the school campus.',
    requirements: 'None',
    process: ['1. Before the students are brought to the OSA, they will first conduct an investigation with the parties involved.',
      '*The office will conduct the investigation by retrieving CCTV Footages and interviewing.',
      '*If both parties are not yet fine, or no one admitted their misconduct, they will be brought to OSA.'
    ],
    tags: ['Complaints', 'Offenses', 'Reports', 'Suspicious Activities']
  }, {
    name: 'Lost & Found',
    description: 'Students bring Lost Items to the Security Office for safe-keeping, and returning the lost items to the respective owner.',
    requirements: 'Lost Item',
    process: ['1. Bring the Item to the Security Office or give the item to the marshalls'],
    tags: ['Lost and Found', 'Lost Items']
  }, {
    name: 'Security Contact',
    description: 'Students and employees of the university can contact the security office anytime and anywhere.',
    requirements: 'None',
    process: ['1. Dial 442-4915 or local no. 234/309',
      '2. Report emergencies and Criminal Activities'
    ],
    tags: ['Security Contact', 'Emergency Hotline']
  }]
};
