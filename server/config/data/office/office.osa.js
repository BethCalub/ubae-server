'use strict';
exports.osa = {
  office: 'Office of Student Affairs',
  description: 'The Office of the Student Affairs (OSA) offers a comprehensive range of programs and activities that cater to the needs of the students while ensuring their adherence to the vision, mission and objectives of the University',
  location: {
    bldg: 'F',
    floor: '',
    room: ''
  },
  tags: ['OSA', 'Office of Student Affairs'],
  services: [{
    name: 'Readmissions',
    description: 'Getting dropped class cards',
    requirements: ['Valid ID'],
    process: ['1. Go to the office of student affairs',
      '2. Fill up AMC form/ Readmission slip'
    ],
    tags: ['class card', 'readmission']
  }, {
    name: 'Performing Arts',
    description: 'For students who wants to apply for performing arts scholarship',
    requirements: [''],
    process: ['1. Go to student account and fill up scholarship form or yellow form',
      '2. Go to Sir.Amado Orden Jr. from the OSA Director office and he will be the one to process'
    ],
    tags: ['UB Graces', 'UB Voices', 'UB Chamber Orchestra', 'Plug and Play Band', 'UBBUK Ethnic Dance Group']
  }]
};
