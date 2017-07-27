'use strict';
exports.rndc = {
  office: 'Research and Development Center',
  description: 'The creation of the UB Research and Development Center (R&DC) was spearheaded for it to serve as a venue for the harmonious growth of the different departments of the institution, their faculty and students, in their pursuit of academic excellence and professional growth and development. The R&DC regularly plans, designs, conducts, coordinates and evaluates short-term training programs, workshops, seminars and lectures for various clienteles while propagating the research culture in the University and the society.',
  location: {
    bldg: 'F',
    floor: '2nd',
    room: 'F208'
  },
  tags: ['Research and Development Center', 'RNDC', 'R&DC'],
  services: [{
    name: 'Format Editing',
    description: 'Formatting students documents with APA Format',
    requirements: ['A copy of Manuscript', 'Valid ID'],
    process: ['1. Go to the R&DC office',
      '2. Submit a copy of your study or a copy of manuscript.',
      '3. Go to the R&DC Office and login to the log book'
    ],
    tags: ['Format Editing', 'APA Format Editing']
  }, {
    name: 'Statistic Package for Social Sciences',
    description: 'SPSS is one of the most popular statistical packages which can perform highly complex data manipulation and analysis with simple instructions.',
    requirements: ['Your study or copy of manuscript.', 'Valid ID'],
    process: ['1. Go to the R&DC Office and get referral slip.',
      '2. Submit a copy of your study or a copy of manuscript.',
      '3. The office will be the one to reffer you with a statistician.'
    ],
    tags: ['Statistic Package for Social Sciences', 'SPSS', 'Statistics Assistance']
  }, {
    name: 'Poster Preparation',
    requirements: 'Request Letter',
    process: ['1. Give a request letter with the poster size, font, color, text and other information about your poster.',
      '2. Submit Request Letter to the R&DC Office.'
    ],
    tags: 'Poster Preparation'
  }, {
    name: 'Publication of Research findings (Catalyst)',
    description: 'Publication of Research',
    requirements: ['Full manuscript', 'Ethics Clearance', 'Letter of Acceptance'],
    process: ['1. Submit Full manuscript to R&DC.',
      '2. Sign the Consent to publish and transfer of copyright.',
      '3. Your research will then undergo tool validation verification.',
      '4. Submit ethics clearance.',
      '5. If your study is quantitative, your research will be verified by a statistician.'
    ],
    tags: ['Publication of Research findings', 'Catalyst']
  }, {
    name: 'Tool Validation',
    requirements: 'Statement of the Problem, Methodology and Questionnaire signed by members of the panelist and adviser.',
    process: '1. Go to the R&DC Office and submit requirements',
    tags: 'Tool Validation'
  }, {
    name: 'Grammar Check',
    description: 'Allows students to use Grammarly to check the grammar of their documents or files',
    requirements: 'Valid ID',
    process: ['1. Go to the R&DC Office and login to the log book',
      '2. Send Manuscript to R&DC email.'
    ],
    tags: 'Grammar Check'
  }, {
    name: 'Plagiarism Test',
    description: 'Allows students to use Grammarly to check the plagiarism of their documents or files',
    requirements: 'Valid ID',
    process: ['1. Go to the R&DC Office and login to the log book',
      '2. Send Manuscript to R&DC email.'
    ],
    tags: 'Plagiarism Test'
  }, {
    name: 'Spell Check',
    description: 'Allows students to use Grammarly to check the spelling of their documents or files',
    requirements: 'Valid ID',
    process: ['1. Go to the R&DC Office and login to the log book',
      '2. Send Manuscript to R&DC email.'
    ],
    tags: 'Spell Check'
  }, {
    name: 'Use of computers',
    description: 'Allows students to use the office computer',
    requirements: 'Valid ID',
    process: '1. Go to the R&DC Office and login to the log book',
    tags: 'Use of computers'
  }]
};
