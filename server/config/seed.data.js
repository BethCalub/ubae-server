'use strict';
let sbaa = {
  department: 'SCHOOL OF BUSINESS ADMINISTRATION AND ACCOUNTANCY',
  mission: 'The University of Baguio educates individuals to be empowered professionals in a global community. ',
  objectives: {
    header: 'The School of Business Administration and Accountancy aims to produce a graduate who ',
    list: ['1. cultivates the knowledge that is imperative for success in a globalized setting; ',
      '2. displays expertise appropriate to the profession; ',
      '3. typifies professional integrity with humility; ',
      '4. undertakes researches to promote systematic bases for business ',
      '5. decisions; utilizes macro-environmental acumen for economic growth and ',
      '6. development; and exhibits commendable accomplishments in business and accountancy.'
    ]
  },
  tags: ['SBAA', 'Accountancy', 'Business Ad'],
  programs: [{
    name: 'Master in Business Administration',
    programType: 'Graduate',
    objectives: {
      header: 'The Master in Business Administration Program aims to produce a graduate who ',
      list: ['1. conveys academic competence that exceeds the expectations of the clientele; ',
        '2. portrays excellent managerial and supervisory skills; ',
        '3. makes moral decisions grounded on social responsibility and accountability; ',
        '4. conducts business researches for the improvement of the industry; ',
        '5. takes a proactive part in promoting a business-friendly environment for a better community; and ',
        '6. promotes ethical management practices that ensure the well-being of employees.'
      ]
    },
  }, {
    name: 'Bachelor of Science in Business Administration ',
    years: 5,
    requirements: 'Requirement after Graduation: Licensure Examniation for Certified Public Accountants.',
    programType: 'Baccaluarate',
    objectives: {
      header: 'The Bachelor of Science in Business Administration Program aims to produce a graduate who: ',
      list: ['1. fosters the highest level of competence in the chosen career; ',
        '2. performs the requisite skills in the various business disciplines; ',
        '3. makes morally upright choices in dealing with ethical dilemmas; ',
        '4. undertakes significant researches employed in crafting of relevant business decisions; ',
        '5. takes personal initiative and responsibility through participation in community-related activities; and ',
        '6. contributes to successful business ventures by creditable work performance.'
      ]
    }
  }, {
    name: 'Bachelor of Science in Accountancy',
    years: 4,
    programType: 'Baccaluarate',
    objectives: {
      header: 'The Bachelor of Science in Accountancy Program aims to produce a graduate who: ',
      list: ['1. applies accounting knowledge to meet the demands of the business community; ',
        '2. demonstrates high proficiency in the practice of the profession; ',
        '3. conforms with the highest degree of ethical standards; ',
        '4. employs researches to elevate professional knowledge and skills in sound business decisions; ',
        '5. satisfies the demands of a dynamic industry for a better community; and ',
        '6. typifies excellence in the practice of the accounting profession.'
      ]
    }
  }, {
    name: 'Associate in Accounting Technology',
    years: 3,
    programType: 'Ladderized Program'
  }, {
    name: 'Certificate in Accounting Technology',
    years: 2,
    programType: 'Ladderized Program'
  }]
};

let sod = {
  department: 'SCHOOL OF DENTISTRY',
  mission: 'The University of Baguio educates individuals to be empowered professionals in a global community. The School of Dentistry is committed in providing excellent dental education to produce competitive and socially responsible dentists.',
  tags: ['SOD', 'Dentistry', 'Dentist'],
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
    }
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
    }
  }, {
    name: 'Pre-Dentistry',
    years: 2,
    programType: 'Baccalaureate'
  }]
};

let sol = {
  department: 'SCHOOL OF LAW',
  mission: 'The University of Baguio educates individuals to be empowered professionals in a global community. The University of Baguio School of Law endows advocates of law to advance the promotion of justice through adequate quality Legal Education.',
  objectives: {
    header: 'The School of Law aims to produce a graduate who: ',
    list: ['1. exhibits professionalism, passion for justice and truth, and integrity;',
      '2. upholds the ethics of the profession;',
      '3. promotes and defends democracy as guaranteed by the fundamental law; and',
      '4. ensures that no person shall be deprived of legal assistance by reason of poverty.'
    ]
  },
  tags: ['SOL', 'Law', 'Lawyer'],
  programs: [{
    name: 'Bachelor of Laws and Letters',
    requirements: 'Requirements after Graduation: BAR Examination'
  }]
};

let sea = {
  department: 'SCHOOL OF ENGINEERING AND ARCHITECTURE',
  mission: 'The University of Baguio educates individuals to be empowered professionals in a global community. The School of Engineering and Architecture, in a dynamic and relevant academic environment, is committed to develop internationally-competitive experts in their field of specialization.',
  objectives: {
    header: 'The School of Engineering and Architecture aims to produce a graduate who:',
    list: [
      '1. develops designs cognizant of social, economic, political and environmental policies and laws;',
      '2. possesses relevant knowledge, skills and attitudes suited in the work field;',
      '3. portrays unquestionable integrity built on public trust;',
      '4. conducts technical and other relevant researches;',
      '5. commits to community development and environmental protection; and ',
      '6. manifests and ensures excellence in the field of expertise.',
    ]
  },
  tags: ['SEA', 'Engineering', 'Architecture', 'Engineer', 'Architect'],
  programs: [{
    name: 'Bachelor of Science in Architecture',
    requirements: 'Requirement after Graduation: Licensure Examination for Architects',
    years: 5,
    programType: '',
    objectives: {
      header: 'The Architecture Program aims to produce a graduate who:',
      list: [
        '1. portrays a high sense of intellectual capability to enhance the quality of life;',
        '2. displays mastery of comprehensive architectural knowledge and proficiency of skills;',
        '3. upholds a sense of dignity and professionalism;',
        '4. undertakes research studies in the various fields of specializations;',
        '5.engenders the importance of preserving, conserving, and promoting the nation’s heritage and culture; and',
        '6. exudes effective expression of ideas through creative and authentic architectural designs.'
      ]
    }
  }, {
    name: 'Bachelor of Science in Civil Engineering',
    requirements: 'Requirement after Graduation: Licensure Examination for Civil Engineers',
    years: 5,
    programType: '',
    objectives: {
      header: 'The Civil Engineering Program aims to produce a graduate who:',
      list: [
        '1. produces designs that are based on sound principles of Civil Engineering;',
        '2. applies technical knowledge and skills in global and environmental aspects;',
        '3. renders absolute honesty based on public trust;',
        '4. pursues lifelong learning, through research;',
        '5. shows concern on environmental issues through developmental projects; and',
        '6. executes a high level of technical expertise in their chosen field.'
      ]
    }
  }, {
    name: 'Bachelor of Science in Electronics and Communications Engineering',
    requirements: 'Requirement after Graduation: Licensure Examination for Electronics and Communications Engineers',
    years: 5,
    programType: '',
    objectives: {
      header: 'The Electronics Engineering Program aims to produce a graduate who:',
      list: [
        '1. innovates designs subject to laws and policies of Electronics Engineering;',
        '2. manifests competence in Electronics Engineering industry or in graduate work;',
        '3.imbibes a sense of professional responsibility;',
        '4. uses practical applications in related researches of Electronics Engineering;',
        '5. develops social awareness for the protection of the environment; and',
        '6. practices notable performance in the exercise of the profession.'
      ]
    }
  }, {
    name: 'Bachelor of Science in Environmental and Sanitary Engineering',
    requirements: 'Requirement after Graduation: Licensure Examination for Sanitary Engineers',
    years: 5,
    programType: '',
    objectives: {
      header: 'The Environmental and Sanitary Engineering Program aims to produce a graduate who:',
      list: [
        '1. formulates plans and designs in the focus areas of Environmental and Sanitary Engineering;',
        '2. acquires the technical knowledge and skills in the various fields of Environmental and Sanitary Engineering;',
        '3. actualizes a morally and ethically upright professional;',
        '4. applies research studies in the various fields of specializations;',
        '5.practices environmental sensitivity and responsibility; and',
        '6.exhibits distinct capability in the field of Environmental and Sanitary Engineering.',
      ]
    }
  }, {
    name: 'Bachelor of Science in Industrial Technology, major in Mechatronics',
    requirements: '',
    years: 4,
    programType: '',
    objectives: {
      header: 'The Industrial Technology Program aims to produce a graduate who:',
      list: [
        '1. invents robotic and electromechanical system designs utilizing Mechatronics;',
        '2. acquires the proper attitude, technical knowledge and skills to address the needs of the industry;',
        '3. depicts an honest and trustworthy image;',
        '4. conducts project study on Mechatronics applications;',
        '5. participates in community development and environmental protection programs; and',
        '6. demonstrates and ensures excellence in the field of Mechatronics.'
      ]
    }
  }]
};

let sit = {
  department: 'SCHOOL OF INFORMATION TECHNOLOGY',
  objectives: {
    header: 'The School of Information technology aims to produce a graduate who: ',
    list: ['1. applies and innovates methodologies in developing and managing computing solutions;',
      '2. adapts to the fast-changing technologies in diverse environments;',
      '3. exemplifies desirable behavior and attributes;',
      '4. conducts relevant researches for the innovation of Information Technology products and services;',
      '5. initiates and participates in community-based activities that contribute to sustainable development; and',
      '6. utilizes leadership qualities for commendable performance in the field of endeavor.'
    ]
  },
  tags: ['SIT', 'IT', 'Computer', 'Programmer'],
  programs: [{
    name: 'Bachelor of Science in Computer Engineering',
    years: 5,
    programType: '',
    objectives: {
      header: 'The Bachelor of Science in Computer Engineering Program aims to produce a graduate who:',
      list: ['1. manages proficiently embedded systems and networks;',
        '2. copes with innovations in the dynamic fields of Computer Engineering; ',
        '3. embodies appropriate traits and conduct;',
        '4. undertakes valuable researches for the advancement and optimization of computer-based systems and services;',
        '5. spearheads in computer-related activities geared towards the development of the community; and',
        '6. applies relevant skills to lead effectively in the chosen career.'
      ]
    }
  }, {
    name: 'Bachelor of Science in Computer Science',
    years: 4,
    programType: '',
    objectives: {
      header: 'The Bachelor of Science in Computer Science Program aims to produce a graduate who:',
      list: [
        '1. implements competently the design, maintenance and innovation of network solutions;',
        '2. handles skillfully technological advancements related with Networking Engineering;',
        '3. exemplifies suitable qualities and behavior;',
        '4. performs researches beneficial for the advancement of networking products and processes;',
        '5. leads in community-related activities aligned to the area of specialization; and',
        '6. acts as the prime mover in Networking Engineering.'
      ]
    }
  }, {
    name: 'Bachelor of Science in Information Technology',
    years: 4,
    programType: '',
    objectives: {
      header: 'The Bachelor of Science in Information Technology Program aims to produce a graduate who:',
      list: [
        '1. utilizes methodologies, standards and tools skillfully in developing IT solutions;',
        '2. copes with the demand of industry;',
        '3. embodies desirable personal and professional attributes;',
        '4. generates significant researches on emerging technologies and client needs;',
        '5. promotes IT-related activities geared toward sustainable community development; and',
        '6. applies leadership skills in Software Development of Network Administration.'
      ]
    }
  }, {
    name: 'Associate in Computer Technology, Multimedia and Web Design',
    years: 2,
    programType: '',
    objectives: {
      header: 'The Associate in Computer Technology Program aims to produce a graduate who:',
      list: [
        '1. applies proficiently technical skills in multi-media and web development to computer and network servicing;',
        '2. copes with the advancement in technology;',
        '3. embodies desirable work habits and amiable personality;',
        '4. assists in the conduct of relevant researches for the improvement of IT products and services;',
        '5. joins in IT-related activities that promote community development; and ',
        '6. employs leadership abilities for remarkable performance.'
      ]
    }
  }, {
    name: 'Associate in Computer Technology, Computer and Network Servicing',
    years: 2,
    programType: '',
    objectives: {
      header: 'The Associate in Computer Technology Program aims to produce a graduate who:',
      list: [
        '1. applies proficiently technical skills in multi-media and web development to computer and network servicing;',
        '2. copes with the advancement in technology;',
        '3. embodies desirable work habits and amiable personality;',
        '4. assists in the conduct of relevant researches for the improvement of IT products and services;',
        '5. joins in IT-related activities that promote community development; and ',
        '6. employs leadership abilities for remarkable performance.'
      ]
    }
  }, {
    name: 'CISCO Certified Network Associate',
    programType: 'Short Course',
  }, {
    name: 'Linux System Administration (Junior Level)',
    programType: 'Short Course',
  }, {
    name: 'Troubleshooting for Non-Technicians',
    programType: 'Short Course',
  }, {
    name: 'Desktop Publishing using Adobe Applications',
    programType: 'Short Course',
  }, {
    name: 'Web Design and Development',
    programType: 'Short Course',
  }]
};

let scjps = {
  department: 'SCHOOL OF CRIMINAL JUSTICE AND PUBLIC SAFETY',
  mission: 'The University of Baguio educates individuals to be empowered professionals in a global community. The School of Criminal Justice and Public Safety, in its dynamic atmosphere for learning, endeavors to train future Criminologists and Forensic Scientists who embody the ideals of patriotism, justice, truth, integrity and service.',
  tags: ['SCJPS']
};

let sihtm = {
  department: 'SCHOOL OF INTERNATIONAL HOSPITALITY AND TOURISM MANAGEMENT',
  mission: 'The University of Baguio educates individuals to be empowered professionals in a global community. The School of International Hospitality and Tourism Management commits itself to train worldwide experts in the industry.',
  tags: ['SIHTM']
};

let slahs = {
  department: 'SCHOOL OF LIBERAL ARTS AND HUMAN SCIENCES',
  mission: 'The University of Baguio educates individuals to be empowered professionals in the global community. The School of Liberal Arts and Human Sciences provides its students with total education apt to their chosen career.',
  tags: ['SLAHS']
};

let sns = {
  department: 'SCHOOL OF NATURAL SCIENCES',
  mission: 'The University of Baguio educates individuals to be empowered professionals in the global community. The School of Natural Sciences is a dynamic and value- oriented community committed to the advancement of the modern health care system.',
  tags: ['SNS']
};

let son = {
  department: 'SCHOOL OF NURSING',
  mission: 'The University of Baguio educates individuals to be empowered professionals in a global community. The School of Nursing commits itself to the development of exceptionally competent and value-driven health professionals.',
  tags: ['SON']
};

let ste = {
  department: 'SCHOOL OF TEACHER EDUCATION',
  tags: ['STE']
};

exports.departments = [sbaa, scjps, sod, sea, sit, sihtm, sol, slahs, sns, son, ste];

exports.dept = [{
  department: 'School of Information Technology',
  location: {
    building: 'F Building',
    floor: 'Second Floor',
    room: 'F201'
  },
  tags: [
    'SIT',
    'Information Technology',
    'SIT'
  ],
  rooms: [{
    roomname: 'Dean\'s Office',
    location: {
      building: 'F Building',
      floor: '2nd Floor',
      room: 'F201'
    },
    tags: ['SIT Dean', 'SIT Main']
  }, {
    roomname: 'Consultation Room',
    location: {
      building: 'F Building',
      floor: '2nd Floor',
      room: 'F219'
    },
    tags: ['SIT Consulation', 'Defense Room']
  }],
  services: [{
    service: 'Mobile Programming',
    description: 'Mobile Application Development',
    tags: [
      'mobile',
      'development',
      'android',
      'ios'
    ],
    requirements: [
      'laptop',
      'basic programming concept',
      'java',
      'android studio'
    ],
    process: [
      '1. Register',
      '2. Go on scheduled data',
    ],
    active: true
  }],
  active: true
}, {
  department: 'School of Dentistry',
  location: {
    building: 'B Building',
    floor: 'Second Floor',
    room: 'B201'
  },
  tags: [
    'SOD',
    'Dentistry',
  ],
  rooms: [{
    roomname: 'Dean\'s Office',
    location: {
      building: 'B Building',
      floor: '2nd Floor',
      room: 'B201'
    },
    tags: ['SOD Dean', 'SOD Main']
  }],
  services: [{
    service: 'Tooth Extraction',
    description: 'Dental Service',
    tags: [
      'Tooth Extraction'
    ],
    requirements: [
      'ID'
    ],
    process: [
      '1. Register',
      '2. Go on scheduled data',
    ],
    active: true
  }],
  active: true
}];
