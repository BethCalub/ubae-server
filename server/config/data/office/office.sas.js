'use strict';
exports.sas = {
  office: 'Student Accounts Section',
  description: 'Mission',
  location: {
    bldg: 'F',
    floor: '1st',
    room: 'F103'
  },
  tags: ['Student Accounts Section', 'Student Accounts', 'SAS'],
  services: [{
    name: 'In-charge of issuance of assessment of school fees/accounts inquiry',
    description: 'The assessment is automatically generated in the student’s portal, but they can also have the printed assessment if they go to the specific windows here that prints the assessment.',
    requirements: 'Valid ID',
    process: ['1. Go to the the designated assessment windows',
      '2. Present your valid ID.'
    ],
    tags: ['Assessment', 'Assessment of Fees', 'Assessment of Account Inquiry']
  }, {
    name: 'Issuance of examination permits',
    description: 'Responsible for the issuance of examination permits',
    requirements: ['Assessment of Fee', 'Payment Receipt'],
    process: ['1. Secure their assessment of fees',
      '2. Pay the minimum required payment',
      '3. Get your permit on the specified window of your department'
    ],
    tags: ['Examination Permit', 'Permit']
  }, {
    name: 'Issuance of Clearance for the release of school credentials',
    description: 'Before the ARC releases the student’s credentials, the clearance form must be cleared by all offices and the students accounts office will be the last one to sign because they will oversee if the student paid all his/her tuition fee and other fees.',
    requirements: 'Signed Clearance Form',
    process: ['1. Submit clearance form to the Student Accounts Section',
      '2. The Office will oversee if the student paid all his/her tuition fee and other fees.',
      '*If the you already paid all your fees, your clearance form will be signed',
      '*If the you have an outstanding balance, you should pay your fee first'
    ],
    tags: ['Clearance', 'Release of School Credentials']
  }]
};
