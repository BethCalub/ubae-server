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
  message: 'The SBAA Dean\'s Office is located at H building, 3rd Floor, Room H301.',
  tags: ['SBAA', 'Dean', 'Office',
    'school',
    'business',
    'administration',
    'accountancy',
    'location',
    'department'
  ]
}, {
  name: 'SCJPS Dean\'s Office ',
  location: 'A Building, 8th Floor, Room A801',
  type: '',
  message: 'The SCJPS Dean\'s Office is located at A building, 8th Floor, Room A801.',
  tags: ['SCJPS', 'Dean', 'Office',
    'school',
    'criminal',
    'justice',
    'public',
    'safety',
    'location',
    'department'
  ]
}, {
  name: 'SOD Dean\'s Office ',
  location: 'B Building, 3rd Floor, Room B301',
  type: '',
  message: 'The SOD Dean\'s Office is located at B Building, 3rd Floor, Room B301.',
  tags: ['SOD', 'Dean', 'Office',
    'school',
    'dentistry',
    'location',
    'department'
  ]
}, {
  name: 'SEA Dean\'s Office ',
  location: 'HB Building, B2 Floor, Room HB202',
  type: '',
  message: 'The SEA Dean\'s Office is located at HB Building, 2nd Floor, Room HB202',
  tags: ['SEA', 'Dean', 'Office',
    'school',
    'engineering',
    'architecture',
    'location',
    'department'
  ]
}, {
  name: 'SIT Dean\'s Office ',
  location: 'F Building, 2nd Floor, Room F201',
  type: '',
  message: 'The SIT Dean\'s Office is located at F Building, 2nd Floor, Room F201',
  tags: ['SIT', 'Dean', 'Office',
    'school',
    'information',
    'technology',
    'location',
    'department'
  ]
}, {
  name: 'SIHTM Dean\'s Office ',
  location: 'A Building, A Floor',
  type: '',
  message: 'The SIHTM Dean\'s Office is located at A Building, A Floor',
  tags: ['SIHTM', 'Dean', 'Office',
    'school',
    'international',
    'hospitality',
    'tourism',
    'management',
    'location',
    'department'
  ]
}, {
  name: 'SOL Dean\'s Office ',
  location: 'F Building, 1st Floor, Room F104',
  type: '',
  message: 'The SOL Dean\'s Office is located at F Building, 1st Floor, Room F104',
  tags: ['SOL', 'Dean', 'Office',
    'school',
    'law',
    'location',
    'department'
  ]
}, {
  name: 'SLAHS Dean\'s Office ',
  location: 'The SLAHS Dean\'s Office is located at H Building, 2nd Floor, Room H201',
  type: '',
  message: 'The SLAHS Dean\'s Office is located at H Building, 2nd Floor, Room H201',
  tags: ['SLAHS', 'Dean', 'Office',
    'school',
    'liberal',
    'arts',
    'human',
    'science',
    'location',
    'department'
  ]
}, {
  name: 'SNS Dean\'s Office ',
  location: 'B Building, 5th Floor, Room B501',
  type: '',
  message: 'The SNS Dean\'s Office is located at B Building, 5th Floor, Room B501',
  tags: ['SNS Dean', 'Dean', 'Office',
    'school',
    'natural',
    'science',
    'location',
    'department'
  ]
}, {
  name: 'SON Dean\'s Office ',
  location: 'A Building, 3rd Floor, Room A301',
  type: '',
  message: 'The SON Dean\'s Office is located at A Building, 3rd Floor, Room A301',
  tags: ['SON', 'Dean', 'Office',
    'school',
    'nursing',
    'location',
    'department'
  ]
}, {
  name: 'STE Dean\'s Office ',
  location: 'H Building, 5th Floor, Room H501',
  type: '',
  message: 'The STE Dean\'s Office is located at H Building, 5th Floor, Room H501',
  tags: ['STE', 'Dean', 'Office',
    'school',
    'teacher',
    'education',
    'location',
    'department'
  ]
}, {
  name: 'Athletics Office ',
  location: 'D Building, 2nd Floor, Room D201',
  type: '',
  message: 'The Athletics Office is located at D Building, 2nd Floor, Room D201',
  tags: ['Athletics', 'location', 'Office']
}, {
  name: 'Center for Counseling and Student Development Office ',
  location: 'F Building, 2nd Floor, Room F206',
  type: '',
  message: 'The Center for Counseling and Student Development Office is located at F Building, 2nd Floor Room F206',
  tags: ['CCSD', 'Center', 'Counseling', 'Student', 'Development', 'Office', 'location']
}, {
  name: 'University of Baguio Clinic ',
  location: 'F Building, 1st Floor, Room F105',
  type: '1st',
  message: 'The University of Baguio Clinic is Located at F Building, 1st Floor, Room F105',
  tags: ['Clinic', 'location']
}, {
  name: 'Media Affairs and Publications Office ',
  location: 'F Building, 2nd Floor, Room F205',
  type: '',
  message: 'The Media Affairs and Publications Office is located at F Building, 2nd Floor, Room F205',
  tags: ['MAPS', 'Media', 'Affairs', 'Publications', 'location', 'Office']
}, {
  name: 'Office of Student Affairs',
  location: 'F Building, 1st Floor',
  type: '',
  message: 'The Office of Student Affairs if located at F Building, 1st Floor',
  tags: ['OSA', 'Office', 'Student', 'Affairs', 'location']
}, {
  name: 'Management Information Systems Office ',
  location: 'F Building, 3rd Floor, Room F403',
  type: '',
  message: 'The Management Information Systems Office is located at F Building, 3rd Floor, Room F403',
  tags: ['MIS', 'Management', 'Information', 'Systems', 'Office', 'location']
}, {
  name: 'Research and Development Center Office ',
  location: 'F Building, 2nd Floor, Room F208',
  type: '',
  message: 'The Research and Development Center Office is located at F Building, 2nd Floor, Room F208',
  tags: ['RNDC', 'Research', 'Development', 'Center', 'Office', 'location']
}, {
  name: 'Student Accounts Section Office ',
  location: 'F Building, 1st Floor, Room F103',
  type: '',
  message: 'The Student Accounts Section Office is located at F Building, 1st Floor, Room F103',
  tags: ['SAS', 'Students', 'Accounts', 'Office', 'location']
}, {
  name: 'Admission and Records Center ',
  location: 'D Building, 2nd Floor',
  type: '',
  message: 'The Admission and Records Center Office is located at D Building, 2nd Floor',
  tags: ['ARC', 'Admission', 'Records', 'Center', 'location', 'Office']
}, {
  name: 'Extension and Community Outreach Services ',
  location: 'D Building, 1st Floor',
  type: '',
  message: 'The Extension and Community Outreach Services Office is located at D Building, 1st Floor',
  tags: ['ECOS', 'Extension', 'Community', 'Outreach', 'Services', 'Office', 'location']
}, {
  name: 'Linkages, Alumni and Review Center ',
  location: 'A Building, 2nd Floor, Room A205',
  type: '',
  message: 'The Linkages, Alumni and Review Center is located at A Building, 2nd Floor Room A205',
  tags: ['LARC', 'Linkages', 'Alumni', 'Review', 'Center', 'Office', 'location']
}, {
  name: 'Main Library ',
  location: 'A Building, 4th Floor',
  type: '',
  message: 'The Main Library is located at A Building, 4th Floor',
  tags: ['Main', 'Library', 'location']
}, {
  name: 'Centennial Library ',
  location: 'H Building, 6th Floor',
  type: '',
  message: 'The Centennial Library is located at H Building, 6th Floor',
  tags: ['Centennial', 'Library', 'location']
}, {
  name: 'Extension Library ',
  location: 'F Building, 3rd Floor',
  type: '',
  message: 'The Extension Library is located at F Building, 3rd Floor',
  tags: ['Extension', 'Library', 'location']
}, {
  name: 'Security Office ',
  location: 'D Building, 2nd Floor',
  type: '',
  message: 'The Security Office is located at D Building, 2nd Floor',
  tags: ['Security', 'Office', 'location']
}];

exports.location = location;
