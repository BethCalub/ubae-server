'use strict';
exports.arc = {
  office: 'Admissions and Records Center',
  description: 'The University of Baguio educates individuals to be empowered professionals in the global community. The ARC, as the record keeper and the show-window of the University of Baguio, is the central repository of student records that allows the efficient and timely access to and releasing of accurate documents',
  location: {
    bldg: 'Building Name',
    floor: 'Floor',
    room: 'Room'
  },
  tags: ['Admissions and Records Center', 'ARC'],
  services: [{
    name: 'Admission for freshmen',
    description: 'The admission is the process through which students enter tertiary education in the university.',
    requirements: ['Form 138', 'NSO Birth Certificate', 'Good Moral Character'],
    process: ['1. Go to ARC Extension to fill up form online',
      '2. Submit documents to admission area for giving your official ID number and checking of requirements',
      '3. You will then go to the respective deans office.'
    ],
    tags: ['Admission for freshmen', 'admission']
  }, {
    name: 'Admission for Transferee',
    description: 'The admission is the process through which students enter tertiary education in the university.',
    requirements: ['Transfer Credential', 'NSO Birth Certificate', 'Good Moral Character'],
    process: ['1. Go to ARC Extension to fill up form online',
      '2. Submit documents to admission area for giving your official ID number and checking of requirements',
      '3. You will then go to the respective deans office.'
    ],
    tags: ['Admission for transferee', 'admission']
  }, {
    name: 'Enrollment for Freshmen',
    description: '',
    requirements: ['Form 138', 'NSO Birth Certificate', 'Good Moral Character'],
    process: ['1. Go to ARC Extension to fill up form online',
      '2. Submit documents to admission area for giving your official ID number and checking of requirements',
      '3. Proceed to deans office for enrollment of subjects',
      '4. Go to cashier to pay the downpayment',
      '5. Proceed to MIS for your ID and printed schedule'
    ],
    tags: ['Enrollment for Freshmen', 'Enrollment']
  }, {
    name: 'Enrollment for Transferee',
    description: '',
    requirements: ['Transfer Credential', 'NSO Birth Certificate', 'Good Moral Character'],
    process: ['1. Go to ARC Extension to fill up form online',
      '2. Submit documents to admission area for giving your official ID number and checking of requirements',
      '3. Proceed to deans office for enrollment of subjects',
      '4. Go to cashier to pay the downpayment',
      '5. Proceed to MIS for your ID and printed schedule'
    ],
    tags: ['Enrollment for Transferee', 'Enrollment']
  }, {
    name: 'Enrollment for New International Student',
    description: '',
    requirements: ['Student Visa and Passport', 'Authenticated School Records', 'CRO Form 14'],
    process: ['1. Go to School Deans Office for approval of CRO Form 14',
      '2. Go to ARC Extension to fill up form online',
      '3. Present your Student Visa, Passport, and Authenticated School Records to the ARC Door C',
      '4. Proceed to deans office for enrollment of subjects',
      '5. Go to cashier to pay the required amount',
      '6. Proceed to MIS for your ID and printed schedule'
    ],
    tags: ['Enrollment for New International Student', 'Enrollment']
  }, {
    name: 'Enrollment for Current Student',
    description: '',
    requirements: 'Valid ID',
    process: ['1. Go to the deans office and register your preffered subjects',
      '2. (For students with outstanding balance Proceed to Students Accounts)',
      '3. Pay the required downpayment at the Cashier',
      '4. Proceed to MIS for Application of ID and printing of schedule'
    ],
    tags: ['Enrollment for Current Student', 'Enrollment']
  }, {
    name: 'Release of Student Records for Graduates',
    description: 'Releasing documents of students',
    requirements: 'Clearance Form',
    process: ['1. Get clearance from Dean, Library and AMD',
      '2. Submit clearance to ARC for checking',
      '3. If there is no deficiency, ARC will release your claim stamp',
      '4. Your record will be released after 15 days'
    ],
    tags: ['Release of Student Records for Graduates', 'Release of Student Records']
  }, {
    name: 'Release of Student Records for Under-Graduates',
    description: 'Releasing documents of students',
    requirements: 'Clearance Form',
    process: ['1. Get clearance from Dean, Library and AMD',
      '2. Pay required amount at the Cashier',
      '3. Submit clearance to ARC for checking'
    ],
    tags: ['Release of Student Records for Under-Graduates', 'Release of Student Records']
  }]
};
