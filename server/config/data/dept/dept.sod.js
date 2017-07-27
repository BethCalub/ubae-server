'use strict';
exports.sod = {
  department: 'SCHOOL OF DENTISTRY',
  mission: 'The University of Baguio educates individuals to be empowered professionals in a global community. The School of Dentistry is committed in providing excellent dental education to produce competitive and socially responsible dentists.',
  tags: ['SOD', 'Dentistry', 'Dentist'],
  location: {
    bldg: 'A',
    floor: '10th',
    room: 'A1024'
  },
  programs: [{
    name: 'Master in Dental Education',
    programType: 'Graduate',
    objectives: {
      header: 'The Master in Dental Education aims to produce a graduate who:',
      list: ['1. demonstrates excellent skills and expertise in dental services;',
        '2. observes the use of environmentally-friendly methods and materials;',
        '3. ensures the strict observance of the highest ethical standards that uphold the ideals of the profession; ',
        '4. uses scientific studies to improve the oral health of the society; and',
        '5. aids client in effectiveness decision-making through timely interventions and pieces of advice.'
      ]
    },
    tags: ['Master Dental Education', 'Dental Education M.A.']
  }, {
    name: 'Doctor of Dental Medicine',
    years: 4,
    requirements: 'Requirements after Graduation: Licensure Examination for Dentists',
    prereq: 'Pre-Dentistry',
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Doctor of Dental Medicine Program aims to produce a graduate who:',
      list: ['1. practices a relentless pursuit of scientific knowledge;',
        '2. performs appropriate dental services with high standards guided by the Code of Professional Ethics;',
        '3. sustains an attitude reflective of efficiency and professionalism;',
        '4. conducts relevant researches that promote oral health;',
        '5. advocates oral health through community education and outreach programs; and',
        '6. devotes career to the advancement of total wellness.'
      ]
    },
    tags: ['Doctor Dental Medicine', 'DMD']
  }, {
    name: 'Pre-Dentistry',
    years: 2,
    programType: 'Baccalaureate',
    tags: ['Pre-Dentistry']
  }]
};
