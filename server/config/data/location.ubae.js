// Guide Lines
// {
//   name: 'Name of Location',
//   location: 'Address or something that wwould describe the location',
//   type: 'OPTIONAL FOR NOW',
//   message: 'Message that UBAE will show to the user. Must be human like',
//   tags: ['Tag1', 'Tag 2'],
// }

var location = [{
  name: 'SBAA Dean\'s Office ',
  location: 'H Building, 3rd Floor, Room H301',
  type: '',
  message: 'The SBAA Dean\'s Office is located at the 3rd Floor of H Building, Room H301.',
  tags: ['SBAA', 'Dean', 'Office',
    'school',
    'business',
    'administration',
    'accountancy',
    'location',
    'department',
    'h301'
  ]
}, {
  name: 'SCJPS Dean\'s Office ',
  location: 'A Building, 8th Floor, Room A801',
  type: '',
  message: 'The SCJPS Dean\'s Office is located at the 8th Floor of A Building, Room A801.',
  tags: ['SCJPS', 'Dean', 'Office',
    'school',
    'criminal',
    'justice',
    'public',
    'safety',
    'location',
    'department',
    'A801'
  ]
}, {
  name: 'SOD Dean\'s Office ',
  location: 'B Building, 3rd Floor, Room B301',
  type: '',
  message: 'The SOD Dean\'s Office is located at the 3rd Floor of B Building, Room B301.',
  tags: ['SOD', 'Dean', 'Office',
    'school',
    'dentistry',
    'location',
    'department',
    'B301'
  ]
}, {
  name: 'SEA Dean\'s Office ',
  location: 'HB Building, B2 Floor, Room HB202',
  type: '',
  message: 'The SEA Dean\'s Office is located at the 2nd Basement Floor of H Building, Room HB202.',
  tags: ['SEA', 'Dean', 'Office',
    'school',
    'engineering',
    'architecture',
    'location',
    'department',
    'HB202'
  ]
}, {
  name: 'SIT Dean\'s Office ',
  location: 'F Building, 2nd Floor, Room F201',
  type: '',
  message: 'The SIT Dean\'s Office is located at the 2nd Floor of F Building, Room F201.',
  tags: ['SIT', 'Dean', 'Office',
    'school',
    'information',
    'technology',
    'location',
    'department',
    'F201'
  ]
}, {
  name: 'SIHTM Dean\'s Office ',
  location: 'A Building, A Floor',
  type: '',
  message: 'The SIHTM Dean\'s Office is located at the A Floor of A Building.',
  tags: ['SIHTM', 'Dean', 'Office',
    'school',
    'international',
    'hospitality',
    'tourism',
    'management',
    'location',
    'department',
  ]
}, {
  name: 'SOL Dean\'s Office ',
  location: 'F Building, 1st Floor, Room F104',
  type: '',
  message: 'The SOL Dean\'s Office is located at the 1st Floor of F Building, Room F104.',
  tags: ['SOL', 'Dean', 'Office',
    'school',
    'law',
    'location',
    'department',
    'F104'
  ]
}, {
  name: 'SLAHS Dean\'s Office ',
  location: 'The SLAHS Dean\'s Office is located at H Building, 2nd Floor, Room H201',
  type: '',
  message: 'The SLAHS Dean\'s Office is located at the 2nd Floor of H Building, Room H201.',
  tags: ['SLAHS', 'Dean', 'Office',
    'school',
    'liberal',
    'arts',
    'human',
    'science',
    'location',
    'department',
    'H201'
  ]
}, {
  name: 'SNS Dean\'s Office ',
  location: 'B Building, 5th Floor, Room B501',
  type: '',
  message: 'The SNS Dean\'s Office is located at the 5th Floor of B Building, Room B501.',
  tags: ['SNS Dean', 'Dean', 'Office',
    'school',
    'natural',
    'science',
    'location',
    'department',
    'B501'
  ]
}, {
  name: 'SON Dean\'s Office ',
  location: 'A Building, 3rd Floor, Room A301',
  type: '',
  message: 'The SON Dean\'s Office is located at the 3rd Floor of A Building, Room A301.',
  tags: ['SON', 'Dean', 'Office',
    'school',
    'nursing',
    'location',
    'department',
    'A301'
  ]
}, {
  name: 'STE Dean\'s Office ',
  location: 'H Building, 5th Floor, Room H501',
  type: '',
  message: 'The STE Dean\'s Office is located at the 5th Floor of H Building, Room H501.',
  tags: ['STE', 'Dean', 'Office',
    'school',
    'teacher',
    'education',
    'location',
    'department',
    'H501'
  ]
}, {
  name: 'Athletics Office ',
  location: 'D Building, 2nd Floor, Room D201',
  type: '',
  message: 'The Athletics Office is located at the 2nd Floor of D Building, Room D201.',
  tags: ['Athletics', 'location', 'Office', 'D201']
}, {
  name: 'Center for Counseling and Student Development Office ',
  location: 'F Building, 2nd Floor, Room F206',
  type: '',
  message: 'The Center for Counseling and Student Development Office is located at the 2nd Floor of F Building, Room F206.',
  tags: ['CCSD', 'Center', 'Counseling', 'Student', 'Development', 'Office', 'location', 'F206']
}, {
  name: 'University of Baguio Clinic ',
  location: 'F Building, 1st Floor, Room F105',
  type: '1st',
  message: 'The University of Baguio Clinic is Located at the 1st Floor of F Building, Room F105.',
  tags: ['Clinic', 'location', 'F105']
}, {
  name: 'Media Affairs and Publications Office ',
  location: 'F Building, 2nd Floor, Room F205',
  type: '',
  message: 'The Media Affairs and Publications Office is located at the 2nd Floor of F Building, Room F205.',
  tags: ['MAPS', 'Media', 'Affairs', 'Publications', 'location', 'Office', 'F205']
}, {
  name: 'Office of Student Affairs',
  location: 'F Building, 1st Floor',
  type: '',
  message: 'The Office of Student Affairs if located at the 1st Floor of F Building, in front of the cashier.',
  tags: ['OSA', 'Office', 'Student', 'Affairs', 'location']
}, {
  name: 'Management Information Systems Office ',
  location: 'F Building, 4th Floor, Room F403',
  type: '',
  message: 'The Management Information Systems Office is located at the 4th Floor of F Building, Room F403.',
  tags: ['MIS', 'Management', 'Information', 'Systems', 'Office', 'location', 'F403']
}, {
  name: 'Research and Development Center Office ',
  location: 'F Building, 2nd Floor, Room F208',
  type: '',
  message: 'The Research and Development Center Office is located at the 2nd Floor of F Building, Room F208.',
  tags: ['RNDC', 'Research', 'Development', 'Center', 'Office', 'location', 'F208']
}, {
  name: 'Student Accounts Section Office ',
  location: 'F Building, 1st Floor, Room F103',
  type: '',
  message: 'The Student Accounts Section Office is located at the 1st Floor of F Building, Room F103.',
  tags: ['SAS', 'Students', 'Accounts', 'Office', 'location', 'F103']
}, {
  name: 'Admission and Records Center ',
  location: 'D Building, 2nd Floor',
  type: '',
  message: 'The Admission and Records Center Office is located at the 2nd Floor of D Building beside the UB Gym.',
  tags: ['ARC', 'Admission', 'Records', 'Center', 'location', 'Office']
}, {
  name: 'Extension and Community Outreach Services ',
  location: 'D Building, 1st Floor',
  type: '',
  message: 'The Extension and Community Outreach Services Office is located at the 1st Floor of D Building below the UB Gym.',
  tags: ['ECOS', 'Extension', 'Community', 'Outreach', 'Services', 'Office', 'location']
}, {
  name: 'Linkages, Alumni and Review Center ',
  location: 'A Building, 2nd Floor, Room A205',
  type: '',
  message: 'The Linkages, Alumni and Review Center is located at the 2nd Floor of A Bulding, Room A205',
  tags: ['LARC', 'Linkages', 'Alumni', 'Review', 'Center', 'Office', 'location', 'A205']
}, {
  name: 'Main Library ',
  location: 'A Building, 4th Floor',
  type: '',
  message: 'The Main Library is located at the 4th Floor of A Building.',
  tags: ['Main', 'Library', 'location']
}, {
  name: 'Centennial Library ',
  location: 'H Building, 6th Floor',
  type: '',
  message: 'The Centennial Library is located at the 6th Floor of H Building.',
  tags: ['Centennial', 'Library', 'location']
}, {
  name: 'Extension Library ',
  location: 'F Building, 3rd Floor',
  type: '',
  message: 'The Extension Library is located at the 3rd floor of F Building.',
  tags: ['Extension', 'Library', 'location']
}, {
  name: 'Security Office ',
  location: 'D Building, 2nd Floor',
  type: '',
  message: 'The Security Office is located at the 2nd floor of D Building beside the UB Cardinals Gym.',
  tags: ['Security', 'Office', 'location']
}, {
  name: 'Rooms in the 1st Floor of F Bulding ',
  location: 'F Bulding, 1st Floor',
  type: '',
  message: 'It is located at the 1st Floor of F Building.',
  tags: ['F101',
    'F102',
    'F103',
    'F104',
    'F105',
    'F106',
    'F107',
    'F108',
    'F109',
    'F111',
    'F113',
    'F114',
    'F115',
    'F116',
    'F117',
    'F118',
    'F119'
  ]
}, {
  name: 'Rooms in the 2nd Floor of F Bulding ',
  location: 'F Bulding, 2nd Floor',
  type: '',
  message: 'It is located at the 2nd Floor of F Building.',
  tags: ['F202',
    'F203',
    'F204',
    'F205',
    'F206',
    'F207',
    'F208',
    'F209',
    'F211',
    'F213',
    'F214',
    'F215',
    'F216',
    'F217',
    'F218',
    'F219'
  ]
}, {
  name: 'Rooms in the 3rd Floor of F Bulding ',
  location: 'F Bulding, 3rd Floor',
  type: '',
  message: 'It is located at the 3rd Floor of F Building.',
  tags: ['F301',
    'F302',
    'F303',
    'F304',
    'F305',
    'F306',
    'F307',
    'F308',
    'F309',
    'F311',
    'F313',
    'F314',
    'F315',
    'F316',
    'F317',
    'F318',
    'F319'
  ]
}, {
  name: 'Rooms in the 1st Floor of D Bulding ',
  location: 'D Bulding, 1st Floor',
  type: '',
  message: 'It is located at the 1st Floor of D Building.',
  tags: ['D201',
    'D102',
    'D103',
    'D104',
    'D105',
    'D106',
    'D107',
    'D108',
    'D109',
    'D111',
    'D113',
    'D114',
    'D115',
    'D116',
    'D117',
    'D118',
    'D119'
  ]
}, {
  name: 'Rooms in the 2nd Floor of D Bulding ',
  location: 'D Bulding, 2nd Floor',
  type: '',
  message: 'It is located at the 2nd Floor of D Building.',
  tags: ['D201',
    'D202',
    'D203',
    'D204',
    'D205',
    'D206',
    'D207',
    'D208',
    'D209',
    'D211',
    'D213',
    'D214',
    'D215',
    'D216',
    'D217',
    'D218',
    'D219'
  ]
}, {
  name: 'Rooms in the 3rd Floor of D Bulding ',
  location: 'D Bulding, 3rd Floor',
  type: '',
  message: 'It is located at the 3rd Floor of D Building.',
  tags: ['D301',
    'D302',
    'D303',
    'D304',
    'D305',
    'D306',
    'D307',
    'D308',
    'D309',
    'D311',
    'D313',
    'D314',
    'D315',
    'D316',
    'D317',
    'D318',
    'D319'
  ]
}, {
  name: 'Rooms in the 1st Floor of B Bulding ',
  location: 'B Bulding, 1st Floor',
  type: '',
  message: 'It is located at the 1st Floor of B Building.',
  tags: ['B101',
    'B102',
    'B103',
    'B104',
    'B105',
    'B106',
    'B107',
    'B108',
    'B109',
    'B111',
    'B113',
    'B114',
    'B115',
    'B116',
    'B117',
    'B118',
    'B119'
  ]
}, {
  name: 'Rooms in the 2nd Floor of B Bulding ',
  location: 'B Bulding, 2nd Floor',
  type: '',
  message: 'It is located at the 2nd Floor of B Building.',
  tags: ['B201',
    'B202',
    'B203',
    'B204',
    'B205',
    'B206',
    'B207',
    'B208',
    'B209',
    'B211',
    'B213',
    'B214',
    'B215',
    'B216',
    'B217',
    'B218',
    'B219'
  ]
}, {
  name: 'Rooms in the 3rd Floor of B Bulding ',
  location: 'B Bulding, 3rd Floor',
  type: '',
  message: 'It is located at the 3rd Floor of B Building.',
  tags: ['B301',
    'B302',
    'B303',
    'B304',
    'B305',
    'B306',
    'B307',
    'B308',
    'B309',
    'B311',
    'B313',
    'B314',
    'B315',
    'B316',
    'B317',
    'B318',
    'B319'
  ]
}, {
  name: 'Rooms in the 4th Floor of B Bulding ',
  location: 'B Bulding, 4th Floor',
  type: '',
  message: 'It is located at the 4th Floor of B Building.',
  tags: ['B401',
    'B402',
    'B403',
    'B404',
    'B405',
    'B406',
    'B407',
    'B408',
    'B409',
    'B411',
    'B413',
    'B414',
    'B415',
    'B416',
    'B417',
    'B418',
    'B419'
  ]
}, {
  name: 'Rooms in the 5th Floor of B Bulding ',
  location: 'B Bulding, 5th Floor',
  type: '',
  message: 'It is located at the 5th Floor of B Building.',
  tags: ['B501',
    'B502',
    'B503',
    'B504',
    'B505',
    'B506',
    'B507',
    'B508',
    'B509',
    'B511',
    'B513',
    'B514',
    'B515',
    'B516',
    'B517',
    'B518',
    'B519'
  ]
}, {
  name: 'Rooms in the 1st Floor of A Bulding ',
  location: 'A Bulding, 1st Floor',
  type: '',
  message: 'It is located at the 1st Floor of A Building.',
  tags: ['A101',
    'A102',
    'A103',
    'A104',
    'A105',
    'A106',
    'A107',
    'A108',
    'A109',
    'A111',
    'A113',
    'A114',
    'A115',
    'A116',
    'A117',
    'A118',
    'A119'
  ]
}, {
  name: 'Rooms in the 2nd Floor of A Bulding ',
  location: 'A Bulding, 2nd Floor',
  type: '',
  message: 'It is located at the 2nd Floor of A Building.',
  tags: ['A201',
    'A202',
    'A203',
    'A204',
    'A205',
    'A206',
    'A207',
    'A208',
    'A209',
    'A211',
    'A213',
    'A214',
    'A215',
    'A216',
    'A217',
    'A218',
    'A219'
  ]
}, {
  name: 'Rooms in the 3rd Floor of A Bulding ',
  location: 'A Bulding, 3rd Floor',
  type: '',
  message: 'It is located at the 3rd Floor of A Building.',
  tags: ['A301',
    'A302',
    'A303',
    'A304',
    'A305',
    'A306',
    'A307',
    'A308',
    'A309',
    'A311',
    'A313',
    'A314',
    'A315',
    'A316',
    'A317',
    'A318',
    'A319'
  ]
}, {
  name: 'Rooms in the 4th Floor of A Bulding ',
  location: 'A Bulding, 4th Floor',
  type: '',
  message: 'It is located at the 4th Floor of A Building.',
  tags: ['A401',
    'A402',
    'A403',
    'A404',
    'A405',
    'A406',
    'A407',
    'A408',
    'A409',
    'A411',
    'A413',
    'A414',
    'A415',
    'A416',
    'A417',
    'A418',
    'A419'
  ]
}, {
  name: 'Rooms in the 5th Floor of A Bulding ',
  location: 'A Bulding, 5th Floor',
  type: '',
  message: 'It is located at the 5th Floor of A Building.',
  tags: ['A501',
    'A502',
    'A503',
    'A504',
    'A505',
    'A506',
    'A507',
    'A508',
    'A509',
    'A511',
    'A513',
    'A514',
    'A515',
    'A516',
    'A517',
    'A518',
    'A519'
  ]
}, {
  name: 'Rooms in the 6th Floor of A Bulding ',
  location: 'A Bulding, 6th Floor',
  type: '',
  message: 'It is located at the 6th Floor of A Building.',
  tags: ['A601',
    'A602',
    'A603',
    'A604',
    'A605',
    'A606',
    'A607',
    'A608',
    'A609',
    'A611',
    'A613',
    'A614',
    'A615',
    'A616',
    'A617',
    'A618',
    'A619'
  ]
}, {
  name: 'Rooms in the 7th Floor of A Bulding ',
  location: 'A Bulding, 7th Floor',
  type: '',
  message: 'It is located at the 7th Floor of A Building.',
  tags: ['A701',
    'A702',
    'A703',
    'A704',
    'A705',
    'A706',
    'A707',
    'A708',
    'A709',
    'A711',
    'A713',
    'A714',
    'A715',
    'A716',
    'A717',
    'A718',
    'A719'
  ]
}, {
  name: 'Rooms in the 8th Floor of A Bulding ',
  location: 'A Bulding, 8th Floor',
  type: '',
  message: 'It is located at the 8th Floor of A Building.',
  tags: ['A801',
    'A802',
    'A803',
    'A804',
    'A805',
    'A806',
    'A807',
    'A808',
    'A809',
    'A811',
    'A813',
    'A814',
    'A815',
    'A816',
    'A817',
    'A818',
    'A819'
  ]
}, {
  name: 'Rooms in the 1st Floor of H Bulding ',
  location: 'H Bulding, 1st Floor',
  type: '',
  message: 'It is located at the 1st Floor of H Building.',
  tags: ['H101',
    'H102',
    'H103',
    'H104',
    'H105',
    'H106',
    'H107',
    'H108',
    'H109',
    'H111',
    'H113',
    'H114',
    'H115',
    'H116',
    'H117',
    'H118',
    'H119'
  ]
}, {
  name: 'Rooms in the 2nd Floor of H Bulding ',
  location: 'H Bulding, 2nd Floor',
  type: '',
  message: 'It is located at the 2nd Floor of H Building.',
  tags: ['H201',
    'H202',
    'H203',
    'H204',
    'H205',
    'H206',
    'H207',
    'H208',
    'H209',
    'H211',
    'H213',
    'H214',
    'H215',
    'H216',
    'H217',
    'H218',
    'H219'
  ]
}, {
  name: 'Rooms in the 3rd Floor of H Bulding ',
  location: 'H Bulding, 3rd Floor',
  type: '',
  message: 'It is located at the 3rd Floor of H Building.',
  tags: ['H301',
    'H302',
    'H303',
    'H304',
    'H305',
    'H306',
    'H307',
    'H308',
    'H309',
    'H311',
    'H313',
    'H314',
    'H315',
    'H316',
    'H317',
    'H318',
    'H319'
  ]
}, {
  name: 'Rooms in the 4th Floor of H Bulding ',
  location: 'H Bulding, 4th Floor',
  type: '',
  message: 'It is located at the 4th Floor of H Building.',
  tags: ['H401',
    'H402',
    'H403',
    'H404',
    'H405',
    'H406',
    'H407',
    'H408',
    'H409',
    'H411',
    'H413',
    'H414',
    'H415',
    'H416',
    'H417',
    'H418',
    'H419'
  ]
}, {
  name: 'Rooms in the 5th Floor of H Bulding ',
  location: 'H Bulding, 5th Floor',
  type: '',
  message: 'It is located at the 5th Floor of H Building.',
  tags: ['H501',
    'H502',
    'H503',
    'H504',
    'H505',
    'H506',
    'H507',
    'H508',
    'H509',
    'H511',
    'H513',
    'H514',
    'H515',
    'H516',
    'H517',
    'H518',
    'H519'
  ]
}, {
  name: 'University of Baguio Address ',
  location: 'General Luna Rd. Baguio City Philippines 2600',
  type: '',
  message: 'It is located at the 5th Floor of H Building.',
  tags: ['Address', 'UB', 'University', 'Baguio', 'Location']
}];

exports.location = location;
