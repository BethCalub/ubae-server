'use strict';
exports.library = {
  office: 'UB Library',
  description: 'The UB Library Department is committed to support the academic community by providing excellent library services and extensive collections of references.',
  location: {
    bldg: '',
    floor: '',
    room: ''
  },
  tags: ['Library', 'Lib'],
  services: [{
    name: 'Follet-DLM Mobile Application',
    description: '',
    requirements: ['Internet', 'Web Browser'],
    process: ['1. Download and install Destiny Quest mobile app from the app store or Google Play.',
      '2. Launch the Destiny Quest mobile app.',
      '3. Enter your Destiny URL (follett.ubaguio.edu) and tap Connect.',
      '4. Select your school Library.',
      '5. Enter your User ID and Password. Username: ID NUMBER (eg. 150016)  Password: SURNAME (eg. delacruz)',
      '6. Tap Log in.'
    ],
    tags: ['Follet', 'Mobile Application']
  }, {
    name: 'Journals',
    description: '',
    requirements: ['Valid ID'],
    process: [''],
    tags: ['Journal', 'Books', 'Magazines', 'Newspaper']
  }, {
    name: 'New Library Databases/E-Journals',
    description: '',
    requirements: [''],
    process: ['A. For gale group',
      '1a. type in url www.infotrac.galegroup.com/itweb/phubagu',
      '2a. type in PASSWORD: discover',
      'B. For Worldbook online',
      '1b. depending on department type in username SBAA:ubstud2016sbaa SIHTM:ubstud2016sihtm SIT:ubstud2016sit GRADSCHL:ub stud2016gradsc',
      '2b. type in password corresponding the username SBAA:alibangbang SIHTM:cabellero SIT:eucalyptus GRADSCHL:tigerlily',
      'C. For DOST-STARBOOKS',
      '1c. go to www.starbooks.ph',
      '2c. type in USERNAME: universityofbaguio',
      '3c. type in PASSWORD: 123456'
    ],
    tags: ['E-Journal', 'Online Journals']
  }, {
    name: 'Clearance signing',
    description: '',
    requirements: ['Valid ID'],
    process: [''],
    tags: ['Clearance']
  }, {
    name: 'Library Orientation',
    description: '',
    requirements: ['Valid ID'],
    process: ['1. Just go to the Centennial Library for Library Orientation Request'],
    tags: ['LIbrary Tour', 'Library Orientation']
  }, {
    name: 'Computers for internet surfing in the library',
    description: 'Availing of students and employees to use computers with internet and also free wifi.',
    requirements: ['Valid ID'],
    process: [''],
    tags: ['Library Computer', 'Library WiFi']
  }, {
    name: 'Discussion rooms',
    description: '',
    requirements: ['Valid ID'],
    process: ['1. Fill up Discussion Room Reservation Form'],
    tags: ['Library Discussion Room', 'Discussion Room', 'Discussion']
  }]
};
