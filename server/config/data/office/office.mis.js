'use strict';
exports.mis = {
  office: 'Management Information Systems',
  description: 'The UB MIS Office commits itself to provide innovative, quality and sustainable ICT solutions and services that meet the changing needs of the University to keep abreast with the demands of the society.',
  location: {
    bldg: 'F',
    floor: '3rd Floor',
    room: 'F403'
  },
  tags: ['MIS', 'Management Information Systems'],
  services: [{
    name: 'Virus scanning and removal for flash drives and portable hard disk',
    description: '',
    requirements: ['Valid ID'],
    process: ['1. Go to the MIS office',
      '2. Present your valid ID'
    ],
    tags: ['USB', 'Virus Scanning']
  }, {
    name: 'Assessment of PC or Laptop',
    description: 'The office only checks the problem of your laptop or PC, but they dont do repairing.',
    requirements: ['Valid ID'],
    process: ['1. Go to the MIS office',
      '2. Present your valid ID'
    ],
    tags: ['PC', 'Laptop', 'Assesment']
  }, {
    name: 'Installation of open-source or free software',
    description: 'The office gives students open source softwares',
    requirements: ['Valid ID'],
    process: ['1. Go to the MIS office',
      '2. Present your valid ID'
    ],
    tags: ['Software']
  }, {
    name: 'Printing and validation of student ID',
    description: '',
    requirements: ['A. Freshmen- must be enrolled, receipt of enrollment', 'B. ID Replacement- replacement form from student affairs, receipt of id replacement payment', 'C. Validation- ID'],
    process: ['1A. Go to the MIS office and present your receipt',
      '2A. You will then be asked for your signature',
      '3A. You will then have your ID picture.',
      '1B. Fill up replacement form from student affairs',
      '2B. Pay fee to the cashier',
      '3B. Go to the MIS office and present your replacement form and receipt',
      '4B. You will then be asked for your signature',
      '5B. You will then have your ID picture.',
      '1C. Go to the MIS office',
      '2C. Present your valid ID'
    ],
    tags: ['Student ID']
  }, {
    name: 'Printing of alumni and other IDs',
    description: '',
    requirements: ['Alumni- clearance form'],
    process: ['1. Go to the MIS office and present your clearance form',
      '2. You will then be asked for your signature',
      '3. You will then have your ID picture.'
    ],
    tags: ['Alumni ID']
  }, {
    name: 'Creation of Wi-Fi account',
    description: '',
    requirements: ['Valid ID'],
    process: ['1. Go to the MIS office and request for an account',
      '2. Present valid ID'
    ],
    tags: ['WiFi', 'Wifi account']
  }]
};
