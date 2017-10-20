// Guide Lines
// {
//   name: 'Name of Department',
//   offer: ['Step1', 'Step2'], // Services courses they provide
//   type: 'OPTIONAL FOR NOW',
//   message: 'Message that UBAE will show to the user. Must be human like',
//   tags: ['Tag1', 'Tag 2'] // Tags can be service or courses a department or office provides.
// }


var provider = [{
  name: 'School of Business Administration and Accountancy',
  offer: ['Master in Business Administration',
    'Bachelor of Science in Accountancy',
    'Bachelor of Science in Business Administration, major in Financial Management',
    'Bachelor of Science in Business Administration, major in Marketing Management',
    'Bachelor of Science in Business Administration, major in Operations Management',
    'Bachelor of Science in Business Administration, major in Human Resource Development Management',
    'Associate in Accounting Technology',
    'Certificate in Accounting Technology'
  ],
  type: '',
  message: 'It is offered by the School of Business Administration and Accountancy.',
  tags: ['BS',
    'MA',
    'Bachelor',
    'Science',
    'major',
    'Master',
    'offered',
    'offers',
    'Available',
    'School',
    'Department',
    'Courses',
    'Programs',
    'MBA',
    'Business',
    'Administration',
    'BSAC',
    'AC',
    'Accountancy',
    'Accounting',
    'BSBAFM',
    'BAFM',
    'Financial',
    'Management',
    'BSBAMM',
    'BAMM',
    'Marketing',
    'BSBAOM',
    'BAOM',
    'Operations',
    'BSBAHRDM',
    'BAHRDM',
    'Human',
    'Resource',
    'Development',
    'AAT',
    'Associate',
    'CAT',
    'Certificate'
  ]
}, {
  name: 'School of Criminal Justice and Public Safety',
  offer: ['Doctor of Philosophy in Criminal Justice with Specialization in Criminology',
    'Master of Science in Criminal Justice with Specialization in Criminology',
    'Bachelor of Science in Criminology',
    'Bachelor of Science in Forensic Science'
  ],
  type: '',
  message: 'It is offered by the School of School of Criminal Justice and Public Safety.',
  tags: ['BS',
    'MA',
    'PHD',
    'Bachelor',
    'Science',
    'Master',
    'Doctor',
    'Philosophy',
    'offered',
    'offers',
    'Available',
    'School',
    'Department',
    'Courses',
    'Programs',
    'PHDCJSC',
    'CJSC',
    'Criminal',
    'Justice',
    'Specialization',
    'MSCJSC',
    'SCJSC',
    'BSCRIM',
    'Crim',
    'Criminology',
    'Forensic',
    'BFSci',
    'FSCI'
  ]
}, {
  name: 'School of Engineering and Architecture',
  offer: ['Bachelor of Science in Architecture',
    'Bachelor of Science in Civil Engineering',
    'Bachelor of Science in Electronics and Communications Engineering',
    'Bachelor of Science in Environmental and Sanitary Engineering',
    'Bachelor of Science in Industrial Technology, major in Mechatronics'
  ],
  type: '',
  message: 'It is offered by the School of Engineering and Architecture.',
  tags: ['BS',
    'Bachelor',
    'Science',
    'major',
    'offered',
    'offers',
    'Available',
    'School',
    'Department',
    'Courses',
    'Programs',
    'Engineering',
    'BSARCH',
    'ARCH',
    'Architecture',
    'BSCE',
    'CE',
    'Civil',
    'BSECE',
    'ECE',
    'Electronics',
    'Communications',
    'BSESE',
    'ESE',
    'Environmental',
    'Sanitary',
    'BSIT-MECHA',
    'Mecha',
    'Industrial',
    'Technology',
    'Mechatronics'
  ]
}, {
  name: 'School of International Hospitality and Tourism Management',
  offer: ['Bachelor of Science in Hotel and Restaurant Management',
    'Bachelor of Science in Tourism Management',
    'Associate in Arts in Hotel and Restaurant Management'
  ],
  type: '',
  message: 'It is offered by the School of International Hospitality and Tourism Management.',
  tags: ['BS',
    'Bachelor',
    'Science',
    'major',
    'offered',
    'offers',
    'Available',
    'School',
    'Department',
    'Courses',
    'Programs',
    'Management',
    'BSHRM',
    'HRM',
    'Hotel',
    'BSTM',
    'TM',
    'Tourism',
    'AAHRM',
    'AA',
    'Restaurant'
  ]
}, {
  name: 'School of Information Technology',
  offer: ['Bachelor of Science in Computer Engineering',
    'Bachelor of Science in Computer Science',
    'Bachelor of Science in Information Technology',
    'Cisco Certified Entry Level',
    'Cisco Certified Network Associate'
  ],
  type: '',
  message: 'It is offered by the School of Information Technology.',
  tags: ['BS',
    'Bachelor',
    'Science',
    'major',
    'offered',
    'offers',
    'Available',
    'School',
    'Department',
    'Courses',
    'Programs',
    'Computer',
    'BSCPE',
    'CPE',
    'COE',
    'Engineering',
    'BSCS',
    'CS',
    'ComSci',
    'BSIT',
    'IT',
    'CC',
    'CCENT',
    'ENT',
    'CCNA',
    'NA'
  ]
}, {
  name: 'School of Liberal Arts and Human Sciences',
  offer: ['Master in Public Administration',
    'Master of Arts in English',
    'Bachelor of Arts in Broadcasting',
    'Bachelor of Arts in English',
    'Bachelor of Arts in Mass Communication',
    'Bachelor of Arts in Political Science',
    'Bachelor of Science in Psychology',
    'Bachelor of Arts in Music',
    'Extension Classes in Music'
  ],
  type: '',
  message: 'It is offered by the School of Liberal Arts and Human Sciences.',
  tags: ['BS',
    'MA',
    'BA',
    'Bachelor',
    'Science',
    'Arts',
    'Master',
    'offered',
    'offers',
    'Available',
    'School',
    'Department',
    'Courses',
    'Programs',
    'MPA',
    'Public',
    'Administration',
    'MAEng',
    'English',
    'BABroad',
    'Broadcasting',
    'BAEng',
    'BAComm',
    'Communication',
    'BAPolSci',
    'Political',
    'BSPsych',
    'Psychology',
    'BAMusic',
    'Music',
    'Extension',
    'Classes'
  ]
}, {
  name: 'School of Natural Sciences',
  offer: ['Bachelor of Science in Physical Therapy', 'Bachelor of Medical Laboratory Science'],
  type: '',
  message: 'It is offered by the School of Natural Sciences.',
  tags: ['BS',
    'Bachelor',
    'Science',
    'offered',
    'offers',
    'Available',
    'School',
    'Department',
    'Courses',
    'Programs',
    'BSPT',
    'Physical',
    'Theraphy',
    'Medical',
    'Laboratory'
  ]
}, {
  name: 'School of Dentistry',
  offer: ['Master in Dental Education',
    'Doctor of Dental Medicine',
    'Pre-Dentistry'
  ],
  type: '',
  message: 'It is offered by the School of Dentistry.',
  tags: ['MA',
    'Doctor',
    'Master',
    'offered',
    'offers',
    'Available',
    'School',
    'Department',
    'Courses',
    'Programs',
    'MDE',
    'Dental',
    'Education',
    'DM',
    'Medicine',
    'Pre',
    'Den',
    'Dentistry'
  ]
}, {
  name: 'School of Law',
  offer: ['Bachelor of Laws and Letters'],
  type: '',
  message: 'It is offered by the School of Law.',
  tags: ['Bachelor', 'LLB', 'Laws', 'Letters', 'offered', 'courses', 'programs', 'offers', 'Available', 'school', 'department'],
}, {
  name: 'School of Nursing',
  offer: ['Bachelor of Science in Nursing', 'Certificate in Health Care Services'],
  type: '',
  message: 'It is offered by the School of Nursing.',
  tags: ['BS',
    'Bachelor',
    'Science',
    'offered',
    'offers',
    'Available',
    'School',
    'Department',
    'Courses',
    'Programs',
    'BSN',
    'Nursing',
    'Nurse',
    'HCS',
    'Certificate',
    'Health',
    'Care',
    'Services'
  ]
}, {
  name: 'School of Teacher Education',
  offer: ['Doctor of Philosophy in Development Education',
    'Doctor of Education',
    'Master of Arts in Education',
    'Bachelor of Elementary Education, major in General Education',
    'Bachelor of Elementary Education, major in Special Education',
    'Bachelor of Secondary Education'
  ],
  type: '',
  message: 'It is offered by the School of Teacher Education.',
  tags: ['MA',
    'PHD',
    'major',
    'Bachelor',
    'Master',
    'Arts',
    'Doctor',
    'Philosophy',
    'offered',
    'offers',
    'Available',
    'School',
    'Department',
    'Courses',
    'Education',
    'Programs',
    'PHDevEd',
    'Development',
    'EDD',
    'MAEd',
    'BEEdGenEd',
    'Elementary',
    'General',
    'BEEdSpEd',
    'Special'
  ]
}, {
  name: 'Admissions and Records Center',
  offer: ['Admission for freshmen',
    'Admission for Transferee',
    'Enrollment for Freshmen',
    'Enrollment for Transferee',
    'Enrollment for New International Student',
    'Enrollment for Current Student',
    'Release of Student Records for Graduates',
    'Release of Student Records for Under-Graduates'
  ],
  type: '',
  message: 'It is offered by the Admissions and Records Center.',
  tags: ['Admission',
    'Freshmen',
    'New',
    'Student',
    'Transferee',
    'Transfer',
    'Enrollment',
    'Enroll',
    'International',
    'Current',
    'Release',
    'Documents',
    'Records',
    'Graduates',
    'Undergraduates',
    'Offered',
    'Offers',
    'Available',
    'Office',
    'Services'
  ]
}, {
  name: 'Athletics Office',
  offer: ['Athletic Scholarship', 'Sports Equipment'],
  type: '',
  message: 'It is offered by the Athletics Office.',
  tags: ['Atheltic', 'Scholarship', 'Lending', 'Sports', 'Equipment', 'Offered', 'Services', 'Offers', 'Available', 'Office']
}, {
  name: 'Center for Counseling and Student Development',
  offer: ['Student development facilitation and counseling services',
    'Psychological Testing Service',
    'Personality Test',
    'Interest Test',
    'Aptitude Test',
    'Mental Ability',
    'Battery Test',
    'Career and placement services'
  ],
  type: '',
  message: 'It is offered by the Center for Counseling and Student Development.',
  tags: ['Student',
    'Development',
    'Facilitation',
    'Counseling',
    'Services',
    'Psychological',
    'Test',
    'Testing',
    'Personality',
    'Interest',
    'Aptitude',
    'Mental',
    'Battery',
    'Career',
    'Placement',
    'Offered',
    'offers',
    'Available',
    'Office'
  ]
}, {
  name: 'University Clinic',
  offer: ['Tooth extraction',
    'Minor Surgery',
    'Physical Examination',
    'Facilitation of Accident Insurance',
    'Radiology and Medtech/Clinical Laboratory Services',
    'Vaccinations',
    'X-ray',
    'Consultation',
    'Medical Certificate',
    'Physical/Medical Examination for local OJT/ Practicum (SIHTM)',
    'Physical/Medical Examination for local OJT/ Practicum (Non-SIHTM Students)',
    'Physical/Medical Examination for International OJT'
  ],
  type: '',
  message: 'It is offered by the University Clinic.',
  tags: ['Free',
    'Tooth',
    'extraction',
    'Minor',
    'Surgery',
    'Suturing',
    'Excision',
    'Circumcision',
    'Physical',
    'Examination',
    'Facilitation',
    'Accident',
    'Insurance',
    'Radiology',
    'Vaccinations',
    'Vaccine',
    'X-Ray',
    'Consultation',
    'Check',
    'Up',
    'Check-up',
    'Consult',
    'Medical',
    'Certificate',
    'Exam',
    'OJT',
    'SIHTM',
    'IOJT',
    'International',
    'Offered',
    'offers',
    'Available',
    'Office',
    'Services'
  ]
}, {
  name: 'Extension and Community Outreach Services',
  offer: ['UBCARES Program'],
  type: '',
  message: 'It is offered by the Extension and Community Outreach Services.',
  tags: ['UBCARES',
    'Program',
    'Outreach',
    'Volunteer',
    'Offered',
    'offers',
    'Available',
    'Office',
    'Services'
  ]
}, {
  name: 'Linkages, Alumni, Review Center',
  offer: ['Assists the UBAFI in issuing the membership identification cards of its members.', 'Gives copies of PRC Board Syllabi for STE Students'],
  type: '',
  message: 'It is offered by the Linkages, Alumni, Review Center',
  tags: ['UBAFI', 'Alumni', 'ID', 'Clearance', 'sign', 'Board', 'STE', 'Syllabi', 'Offered', 'Services', 'Offers', 'Available', 'Office'],
}, {
  name: 'UB Library',
  offer: ['Follet-DLM ',
    'Journals',
    'New Library Databases/E-Journals',
    'Clearance signing',
    'Library Orientation',
    'Computers for internet surfing in the library',
    'Discussion rooms'
  ],
  type: '',
  message: 'It is offered by the School of UB Library.',
  tags: ['Follet',
    'Mobile',
    'Application',
    'Journal',
    'Books',
    'Magazines',
    'Newspaper',
    'E-Journal',
    'Online',
    'Clearance',
    'Signing',
    'Library',
    'Tour',
    'Orientation',
    'Computer',
    'WiFi',
    'Discussion',
    'Room',
    'Offered',
    'offers',
    'Available',
    'Office',
    'Services'
  ],
}, {
  name: 'Media Affairs and Publications Office',
  offer: ['Yearbook and Graduation materials',
    'Social Media Content Development',
    'Website Content Development',
    'Press releases and advertisements'
  ],
  type: '',
  message: 'It is offered by the Media Affairs and Publications Office.',
  tags: ['Press',
    'Releases',
    'Advertisements',
    'Newspapers',
    'Magazines',
    'Materials',
    'Yearbook',
    'Graduation',
    'Social',
    'Media',
    'Content',
    'Website',
    'Offered',
    'offers',
    'Available',
    'Office',
    'Services'
  ],
}, {
  name: 'Management Information Systems',
  offer: ['Virus scanning and removal for flash drives and portable hard disk',
    'Assessment of PC or Laptop',
    'Installation of open-source or free software',
    ' Printing of ID and Schedule',
    'Alumni and other IDs',
    'Wi-Fi account'
  ],
  type: '',
  message: 'It is offered by the Management Information Systems.',
  tags: ['USB',
    'Virus',
    'Scanning',
    'Flashdrive',
    'PC',
    'Laptop',
    'Assesment',
    'Checking',
    'Software',
    'Installation',
    'Student',
    'ID',
    'Alumni',
    'Other',
    'Creation',
    'Create',
    'WiFi',
    'Account',
    'Offered',
    'offers',
    'Print',
    'Schedule',
    'Available',
    'Office',
    'Services'
  ],
}, {
  name: 'Office of Student Affairs',
  offer: ['Readmissions', 'Performing Arts'],
  type: '',
  message: 'It is offered by the Office of Student Affairs.',
  tags: ['Class', 'Card', 'Readmission', 'Performing', 'Arts', 'Scholarship', 'office', 'offer'],
}, {
  name: 'Research and Development Center',
  offer: ['Format Editing',
    'Statistic Package for Social Sciences',
    'Poster Preparation',
    'Publication of Research findings (Catalyst)',
    'Tool Validation',
    'Grammar Check',
    'Plagiarism Test',
    'Spell Check',
    'Use of computers',
    'Presentation of Research Findings',
  ],
  type: '',
  message: 'It is offered by the Research and Development Center.',
  tags: ['Format',
    'Editing',
    'APA',
    'Statistic',
    'Package',
    'Social',
    'Sciences',
    'SPSS',
    'Assistance',
    'Poster',
    'Preparation',
    'Publication',
    'Presentation',
    'Research',
    'Findings',
    'Catalyst',
    'Tool',
    'Validation',
    'Grammar',
    'Check',
    'Plagiarism',
    'Test',
    'Spell',
    'Spelling',
    'Computers',
    'Offered',
    'offers',
    'Available',
    'Office',
    'Services'
  ],
}, {
  name: 'Student Accounts Section',
  offer: ['In-charge of issuance of assessment of school fees/accounts inquiry',
    'Issuance of examination permits',
    'Issuance of Clearance for the release of school credentials'
  ],
  type: '',
  message: 'It is offered by the Student Accounts Section.',
  tags: ['Assessment',
    'Fees',
    'Account',
    'Inquiry',
    'Examination',
    'Permit',
    'Clearance',
    'Release',
    'School',
    'Credentials',
    'Offered',
    'offers',
    'Available',
    'Office',
    'Services',
    'issue'
  ],
}, {
  name: 'Security Office',
  offer: ['Investigate complaints, offenses, reports, and any other unusual or suspicious activities in the campus',
    'Lost & Found',
    'Security Contact'
  ],
  type: '',
  message: 'It is offered by the Security Office.',
  tags: ['Security',
    'Assistance',
    'Contact',
    'Emergency',
    'Lost',
    'Found',
    'Items',
    'Complaints',
    'Offenses',
    'Reports',
    'Suspicious',
    'Activities',
    'Offered',
    'offers',
    'Available',
    'Office',
    'Services',
    'Accident',
    'Incident',
    'Bully'
  ],
}, {
  name: 'ARC RECORDS',
  offer: ['Diploma, Transcript of Records, Scholastic Records, Course Description, Clock Hours, Certificate of (Enrollment, GWA, English as Medium Instruction, Graduation, Multiple Attendance, Earned Units), HS Form 137, Copy of Schedule, Copy of Grades,  '],
  type: '',
  message: 'It is released by the Admission and Records Center.',
  tags: ['Release',
    'Give',
    'Office',
    'Offer',
    'Available',
    'Service',
    'Diploma',
    'Transcript',
    'Record',
    'Scholastic',
    'Course',
    'Description',
    'Clock',
    'Hours',
    'Certificate',
    'Enrollment',
    'General',
    'Weighted',
    'Average',
    'GWA',
    'English',
    'Medium',
    'Instruction',
    'graduation',
    'multiple',
    'attendance',
    'HS',
    'Form',
    '137',
    'Copy',
    'Schedule',
    'Grades',
    'Good',
    'Moral',
    'Earned',
    'Units',
    'TOR'
  ],
}];

exports.provider = provider;
