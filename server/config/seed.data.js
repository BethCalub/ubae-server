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
  location: {
    bldg: 'H',
    floor: '3rd',
    room: 'H310'
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
    name: 'Bachelor of Science in Business Administration',
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
  location: {
    bldg: 'A',
    floor: '10th',
    room: 'A1024'
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
  location: {
    bldg: 'HB',
    floor: '2nd',
    room: 'HB210'
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
  location: {
    bldg: 'F',
    floor: '2nd',
    room: 'F201'
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

let ste = {
  department: 'SCHOOL OF TEACHER EDUCATION',
  mission: '',
  objectives: {
    header: 'The School of Teacher Education aims to produce a graduate who ',
    list: ['1. actualizes high academic proficiency in the domains of learning;',
      '2. facilitates effectively and efficiently in a learning environment conducive to diverse learners;',
      '3. imbibes a strong sense of professionalism as embodied in the Code of Ethics for teachers;',
      '4. undertakes researches in addressing the current trends in education;',
      '5. advocates environmental protection and preservation for sustainable development; and',
      '6. exemplifies the highest standards and practices of professional teachers.'
    ]
  },
  location: {
    bldg: 'H',
    floor: '10th',
    room: 'A1024'
  },
  tags: ['STE', 'Educ', 'Teacher'],
  programs: [{
    name: 'Doctor of Philosophy in Development Education',
    requirements: '',
    prereq: '',
    years: null,
    programType: 'Graduate',
    objectives: {
      header: 'The Doctor of Philosophy in Development Education Program aims to produce a graduate who',
      list: ['1. utilizes sound philosophical thoughts in making informed decisions foreducational development;',
        '2. develops tenets that will serve as foundation for the improvement of education;',
        '3. exemplifies the value of a holistically developed professional who advocates fairness and equality in the work place and the community;',
        '4. conducts philosophical researches for the betterment of the community;',
        '5. serves as a pillar in the formation of the real essence of humanity; ',
        '6. integrates and uses different viewpoints for the transformation of the workplace and the special milieu.'
      ]
    },
    tags: ['Doctor in Philosophy', 'Philos', 'Philosophy']
  }, {
    name: 'Doctor of Education',
    requirements: '',
    prereq: '',
    years: null,
    programType: 'Graduate',
    objectives: {
      header: '',
      list: ['']
    },
    tags: ['Doctor in Education', 'Phd in Education']
  }, {
    name: 'Master of Arts in Education',
    requirements: '',
    prereq: '',
    years: null,
    programType: 'Graduate',
    objectives: {
      header: 'The Master of Arts in Education Major in Educational Management Program aims to produce a graduate who',
      list: ['1.possesses commendable cognitive talent worthy of emulation;,',
        '2.manifests competent supervisory and administrative skills in the academe;',
        '3. serves as a role model of ethical and aesthetic attributes in the community;',
        '4.undertakes and applies significant researches to improve the teaching profession;',
        '5.engages in programs for functional literacy;',
        '6.initiates in the promotion of access to quality education'
      ]
    },
    tags: ['Master in Education']
  }, {
    name: 'Bachelor of Elementary Education',
    requirements: '',
    prereq: '',
    years: 4,
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Bachelor in Elementary Education Program aims to produce a graduate who',
      list: ['1. concretizes noble quality education in the teaching-learning process;',
        '2. demonstrates competence and resourcefulness in creating a child-centered learning;',
        '3. relates well with others through sound ethical practices;',
        '4. conducts researches related to professional growth and development;',
        '5. practices stewardship of the environment to help sustain ecological balance;',
        '6. embodies the highest standards and practices expected of an elementary teacher.'
      ]
    },
    tags: ['Elementary Education']
  }, {
    name: 'Bachelor of Secondary Education',
    requirements: 'Requirement after Graduation: Licensure Examination for Teachers',
    prereq: '',
    years: 4,
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Bachelor in Secondary Education Program aims to produce a graduate who',
      list: ['1 undertakes scholarly endeavors for quality education;',
        '2. practices innovative and creative techniques in facilitating learning in the area of specialization;',
        '3. interacts well with others through positive ethical practices;',
        '4. generates researches for the enhancement of the teaching-learning process;',
        '5. advocates responsible stewardship of the environment through community involvement;',
        '6. personifies the highest standards and practices expected of a secondary education teacher.'
      ]
    },
    tags: ['Secondary Education']
  }]
};

let scjps = {
  department: 'SCHOOL OF CRIMINAL JUSTICE AND PUBLIC SAFETY',
  mission: 'The University of Baguio educates individuals t be empowered professionals in a global community. The school of Criminal Justice and Public Safety, in its dynamic atmosphere for learning, endeavors to train future Criminologists and Forensic Scientists who embody the ideals of patriotism, justice, truth, integrity and service.',
  objectives: {
    header: 'The SCJPS aims to produce a graduate who:',
    list: ['1. demonstrates exemplary performance in the law enforcement profession;',
      '2. ensures accurate, complete, and prompt conduct of case investigations;',
      '3. promotes and protects human rights without discrimination and bias;',
      '4. conducts criminological and forensic researches for community well - being;',
      '5. advocates crime prevention programs for a safer environment; and',
      '6 .exemplifies responsible leadership through socio-civic endeavors.'
    ]
  },
  location: {
    bldg: 'A',
    floor: '10th',
    room: 'A1024'
  },
  tags: ['SCJPS'],
  programs: [{
    name: 'Doctor of Philisophy in Criminology',
    requirements: '',
    prereq: '',
    years: null,
    programType: 'Graduate',
    objectives: {
      header: 'The Doctor of Philosophy in Criminology Program aims to produce a graduate who:',
      list: ['1. exhibits a high level of technical and academic expertise suited to the field of Criminology;',
        '2. demonstrates competencies and skills befitting future leaders and managers of different law enforcement agencies;',
        '3. acts in accordance with precepts and values expected of a law enforcer;',
        '4. undertakes research that contributes to the formulation and implementation of policies on peace and order;',
        '5. assists the government in designing approaches and programs that effectively address public safety issues; and ',
        '6. exudes the highest degree of professionalism in dealing with different people.'
      ]
    },
    tags: ['PhD Criminology']
  }, {
    name: 'Master of Science in Criminology',
    requirements: '',
    prereq: '',
    years: null,
    programType: 'Graduate',
    objectives: {
      header: 'The Master of Science in Criminal Justice with Specialization in Criminology Program aims to produce a graduate who:',
      list: ['1. excels in the field of criminal justice education;',
        '2. exercises due diligence in handling cases and issues dealing with the rights and welfare of the citizenry;',
        '3. manifests virtuous behavior in the promotion of a law-abiding society;',
        '4. conducts advanced and independent researches in criminal justice;',
        '5. leads in the preservation of a dignified life; and',
        '6. takes a proactive role in promoting peace and order in the community.'
      ]
    },
    tags: ['Master Criminology']
  }, {
    name: 'Bachelor of Science in Criminology',
    requirements: 'Requirement after Graduation: Licensure Examination for Criminologists',
    prereq: '',
    years: 5,
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Bachelor of Science in Criminology Program aims to produce a graduate who:',
      list: ['1. displays exceptional skills in law enforcement administration;',
        '2. manifests competencies in crime prevention, scientific crime detection and correctional administration;',
        '3. fosters the values of integrity, accountability and responsibility while serving their fellowmen, community and country;',
        '4. undertakes and utilizes criminological researches on the nature, causes, treatment or punishment of criminal behavior and how criminal justice agencies respond to crime, criminals and victims',
        '5. promotes ideas of stewardship and paternalism for the community and environment and;',
        '6. demonstrates reputable servant leadership in the discharge of his functions.'
      ]
    },
    tags: ['Crim', 'Criminology', 'Bachelor Criminology']
  }, {
    name: 'Bachelor of Science in Forenscic Science',
    requirements: '',
    prereq: '',
    years: 5,
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Bachelor of Forensic Science Program aims to produce a graduate who:',
      list: ['1. demonstrates scientific-based problem solving;',
        '2. applies modern methods of forensic analysis in a laboratory setting;',
        '3. uses forensic evidence that assists in the administration of justice;',
        '4. conducts scientific researches and design appropriate experiments on forensic science;',
        '5. establishes a sustainable outreach program for the community; and',
        '6. shares forensic knowledge to law enforcement agencies.'
      ]
    },
    tags: ['Bachelor Forensic Science', 'Forensic', 'Forensic Science']
  }]
};

let son = {
  department: 'SCHOOL OF NURSING',
  mission: 'The University of Baguio educates individuals to be empowered professionals in a global community. The School of Nursing commits itself to the development of exceptionally competent and value-driven health professionals.',
  objectives: {
    header: 'The School of Nursing aims to produce a health care graduate who',
    list: ['1. exhibits the necessary knowledge, skills and attitudes in promoting and maintaining the holistic well-being of the patient;',
      '2. demonstrates proficiency in the delivery of health-care services;',
      '3. practices the ethico-moral and legal aspects of the nursing profession;',
      '4. conducts health-related researches and applies findings for the enhancement of the care of the patient;',
      '5. participates actively in community services to improve the quality of life;',
      '6. demonstrates effective and efficient leadership capabilities through the health-care concepts, functions and activities.'
    ]
  },
  location: {
    bldg: 'A',
    floor: '10th',
    room: 'A1024'
  },
  tags: ['SON', 'Nursing', 'Nurse'],
  programs: [{
    name: 'Bachelor of Science in Nursing',
    requirements: 'Requirement after Graduation: Licensure Examination for Nurses',
    prereq: '',
    years: null,
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Bachelor of Science in Nursing Program aims to produce a graduate who',
      list: ['1. shows commendable nursing skills, knowledge and attitude in the health care system;',
        '2. demonstrates proficiency of the required and relevant nursing skills;',
        '3. applies bio-ethics principles and approaches consistent with the code of ethics for nurses;',
        '4. conducts nursing researches and adapts evidence-based practices in nursing;',
        '5. engages in community services to promote and maintain the health of clients;',
        '6. exemplifies ideal managerial and leadership skills in the practice of the nursing profession.'
      ]
    },
    tags: ['BSN']
  }, {
    name: 'Diploma in Midwifery',
    requirements: 'Requirement after Graduation: Licensure Examination for Midwives',
    prereq: '',
    years: 2,
    programType: '',
    objectives: {
      header: 'The Diploma in Midwifery Program aims to produce a graduate who',
      list: ['1. exhibits exemplary knowledge in the holistic care of mother and child;',
        '2. displays pertinent skills required in the line of work;',
        '3. observes ethico-moral and legal principles in the practice of the midwifery profession;',
        '4. utilizes evidence-based practices in the care of the client;',
        '5. participates activity in community services to improve quality of life;',
        '6. delivers effective and efficient Midwifery services most beneficial to the client'
      ]
    },
    tags: ['Midwife', 'Diploma']
  }, {
    name: 'Certificate in Health Care Services [Nursing Assistant]',
    requirements: '',
    prereq: '',
    years: 1,
    programType: '',
    objectives: {
      header: 'The Health Care Services Program aims to produce a graduate who:',
      list: ['1. exhibits sufficient knowledge, skills and attitudes in the promotion of wellness;',
        '2. displays expertise of appropriate competencies in the alleviation of client affliction;',
        '3. observes applicable moral principles in the care of the clients;',
        '4. applies evidence-based practices in the conduct of work;',
        '5. joins actively in health-related community services;',
        '6. demonstrates compassion to client and devotion to duties'
      ]
    },
    tags: ['Health Care', 'Certificate']
  }]
};

let sns = {
  department: 'SCHOOL OF NATURAL SCIENCES',
  mission: 'The University of Baguio educates individuals to be empowered professionalsin the global community. The School of Natural Sciences is a dynamic and valueorientedcommunity committed to the advancement of the modern health caresystem.',
  objectives: {
    header: 'The School of Natural Sciences aims to produce a graduate who',
    list: ['1. performs exemplary allied health medical services;',
      '2. competes globally in delivering advanced health care services;',
      '3. adapts a strong sense of social responsibility and accountability in a diverse culture;',
      '4. undertakes relevant scientific researches for community advancement;',
      '5. advocates noble ecological practices for a healthy environment;',
      '6. supports and sustains quality of work in the attainment of total wellness'
    ]
  },
  location: {
    bldg: 'A',
    floor: '10th',
    room: 'A1024'
  },
  tags: ['SNS', 'Natural Sciences'],
  programs: [{
    name: 'Bachelor of Science in Physical Therapy',
    requirements: 'Requirement after Graduation: Licensure Examination for Physical Therapists ',
    prereq: '',
    years: 5,
    programType: 'Baccaluarate',
    objectives: {
      header: 'The BSPT Program aims to produce a graduate who: ',
      list: ['1. adheres to standards of the physical therapy profession;',
        '2. provides suitable habilitation and rehabilitation services with compassion;',
        '3. delivers holistic quality healthcare with the highest degree of professional,moral and ethical standards;',
        '4. leads in rehabilitation-related researches;',
        '5. supports community-building through rehabilitation programs; ',
        '6. advocates excellence in the physical wellness field.'
      ]
    },
    tags: ['PT', 'Physical Therapy', 'BSPT']
  }, {
    name: 'Bachelor of Medical Laboratory Science',
    requirements: 'Requirement after Graduation: Licensure Examination for Medical Technologists ',
    prereq: '',
    years: 4,
    programType: 'Baccaluarate',
    objectives: {
      header: 'The BMLS Program aims to produce a graduate who: ',
      list: ['1. carries out precise clinical laboratory work;',
        '2. demonstrates competence required of a clinical laboratory professional;',
        '3. leads in upholding the integrity of the profession;',
        '4. conducts researches on health and other allied disciplines;',
        '5. promotes a healthy environment through clean and green programs;',
        '6. ensures quality performance in laboratory science.'
      ]
    },
    tags: ['BMLS ', 'Medical Laboratory Science']
  }]
};

let sihtm = {
  department: 'SCHOOL OF INTERNATIONAL HOSPITALITY AND TOURISM MANAGEMENT',
  mission: 'The University of Baguio educates individuals to be empowered professionals in a global community. The School of International Hospitality and Tourism Management commits itself to train worldwide experts in the industry.',
  objectives: {
    header: 'The School of International Hospitality and Tourism Management aims to produce a graduate who:',
    list: [' 1. demonstrates mastery of knowledge and skills in the industry operations at par with international standards;',
      '2. exhibits required competence in the conduct of functions;',
      '3. performs quality services with sincerity, honesty and integrity;',
      '4. utilizes researches in improving hospitality and tourism industry operations;',
      '5. upholds a deep sense of social responsibility and accountability in a multicultural setting; and',
      '6. delivers quality services driven by passion for excellence.'
    ]
  },
  location: {
    bldg: 'A',
    floor: '10th',
    room: 'A1024'
  },
  tags: ['SIHTM'],
  programs: [{
    name: 'Bachelor of Science in Hotel and Restaurant Management',
    requirements: '',
    prereq: '',
    years: null,
    programType: '',
    objectives: {
      header: 'The Bachelor of Science in Hotel and Restaurant Management Program aims to produce a graduate who:',
      list: ['1. displays competence in managerial and entrepreneurial skills in hotel and restaurant industry;',
        '2. demonstrates strong leadership and administrative expertise;',
        '3. manifests uprightness in the performance of duties and responsibilities;',
        '4. conducts and utilizes research that enhances service operations;',
        '5. sustains commitment in promoting livelihood programs for community development; and',
        '6. exudes the dedication for praiseworthy services with the highest degree of professionalism.'
      ]
    },
    tags: ['BSHRM']
  }, {
    name: 'Bachelor of Science in Tourism',
    requirements: '',
    prereq: '',
    years: null,
    programType: '',
    objectives: {
      header: 'The Bachelor of Science in Tourism Management Program aims to produce a graduate who',
      list: ['1. performs effectively and efficiently relevant skills in the travel and tourism industry;',
        '2. exhibits expertise in tourism management;',
        '3. works with honor and integrity;',
        '4. continues the conduct and utilization of research for the improvement of the industry;',
        '5. observes green initiatives to sustain the industry and the environment; and',
        '6. ensures client satisfaction through exceptional customer service'
      ]
    },
    tags: ['TOURISM']
  }, {
    name: 'Associate in Arts in Hotel and Restaurant Management',
    requirements: '',
    prereq: '',
    years: 2,
    programType: 'Ladderized',
    objectives: {
      header: 'The Associate of Arts/Associate in Hotel and Restaurant Management Programs aim to produce a graduate who:',
      list: ['1. demonstrates the core competencies in the hospitality industry;',
        '2. manifests proficiency in supervisory and technical skills; ',
        '3. performs tasks with courtesy, honesty, and dedication;',
        '4. utilizes research in improving HRM service operations;',
        '5. supports the promotion of livelihood programs for community development; and',
        '6. exceeds expectations of guests through cordial and devoted service'
      ]
    },
    tags: ['AAHRM']
  }, {
    name: 'Associate in Hotel and Restaurant Management',
    requirements: '',
    prereq: '',
    years: 1,
    programType: 'Ladderized',
    objectives: {
      header: 'The Associate of Arts/Associate in Hotel and Restaurant Management Programs aim to produce a graduate who:',
      list: ['1. demonstrates the core competencies in the hospitality industry;',
        '2. manifests proficiency in supervisory and technical skills; ',
        '3. performs tasks with courtesy, honesty, and dedication;',
        '4. utilizes research in improving HRM service operations;',
        '5. supports the promotion of livelihood programs for community development; and',
        '6. exceeds expectations of guests through cordial and devoted service'
      ]
    },
    tags: ['AHRM']
  }]
};

let slahs = {
  department: 'SCHOOL OF LIBERAL ARTS AND HUMAN SCIENCES',
  mission: 'The University of Baguio educates individuals to be empowered professionals in the global community. The School of Liberal Arts and Human Sciences provides its students with total education apt to their chosen career.',
  objectives: {
    header: 'The School of Liberal Arts and Human Science aims to produce a graduate who:',
    list: ['1. demonstrates pertinent and cooperative competence befitting a wholly developed individual;',
      '2. adheres to a higher standard of learning founded under the tenets of systematic knowledge, analytical thinking, oral and written communication, arts and leadership;',
      '3. generates an epitome of a socially and professionally accepted code of conduct;',
      '4. conducts researches in the promotion of change and social progress;',
      '5. nurtures an environment fit for a healthier mind and body; and',
      '6. possesses the proper outlook and initiative to pursue related fields of learning.'
    ]
  },
  location: {
    bldg: 'A',
    floor: '10th',
    room: 'A1024'
  },
  tags: ['SLAHS', 'Liberal'],
  programs: [{
    name: 'Master in Public Administration',
    requirements: '',
    prereq: '',
    years: null,
    programType: '',
    objectives: {
      header: 'The Master in Public Administration Program aims to produce a graduate who:',
      list: ['1. demonstrates well-rounded and integrative knowledge in public management and governance;',
        '2. performs responsible administrative and managerial functions in public agencies;',
        '3. embodies the ideals and ethical standards of a public administrator;',
        '4. conducts pertinent researches for the enhancement of public services;',
        '5. imbibes positive influence to address local and national public management issues; and',
        '6. exemplifies a strong sense of dynamic Filipinism and responsible citizenship.'
      ]
    },
    tags: ['Public Administration']
  }, {
    name: 'Master of Arts in English',
    requirements: '',
    prereq: '',
    years: null,
    programType: 'Graduate',
    objectives: {
      header: 'The Master of Arts in English Program aims to produce a graduate who:',
      list: ['1. displays exceptional competencies in the fields of language and literature;',
        '2. exudes a high level of skills in analyzing and interpreting different genres;',
        '3. acts as a role model of professionalism in addressing various societal concerns;',
        '4. undertakes and utilizes language and literature-related researches for community development;',
        '5. promotes positive ideas of the literary works in improving society; and',
        '6. demonstrates language proficiency in the exercise of the profession.'
      ]
    },
    tags: ['Master in English']
  }, {
    name: 'Bachelor of Arts in Broadcasting',
    requirements: '',
    prereq: '',
    years: 4,
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Bachelor of Arts in Communication and Broadcasting Program aims to produce a graduate who: ',
      list: ['1. actualizes the role of media in the transformation of the society;',
        '2. exudes competence in media communication;',
        '3. sustains the highest ethical standards performed by a media practitioner;',
        '4. conducts researches in mass communication that promote change and development;',
        '5. participates actively in development communication programs; and',
        '6. manifests and maintains commendable performance in the media practice.'
      ]
    },
    tags: ['Broadcasting']
  }, {
    name: 'Bachelor of Arts in Mass Communication',
    requirements: '',
    prereq: '',
    years: 4,
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Bachelor of Arts in Communication and Broadcasting Program aims to produce a graduate who: ',
      list: ['1. actualizes the role of media in the transformation of the society;',
        '2. exudes competence in media communication;',
        '3. sustains the highest ethical standards performed by a media practitioner;',
        '4. conducts researches in mass communication that promote change and development;',
        '5. participates actively in development communication programs; and',
        '6. manifests and maintains commendable performance in the media practice.'
      ]
    },
    tags: ['Masscom', 'Mass Communication']
  }, {
    name: 'Bachelor of Arts in English',
    requirements: '',
    prereq: '',
    years: 4,
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Bachelor of Arts in English Program aims to produce a graduate who: ',
      list: ['1. exhibits a competitive quality of education in the fields of language and literature;',
        '2. displays written and oral proficiency in using the English language;',
        '3. promotes better understanding among people through literature;',
        '4. contributes to the preservation and promotion of the nation and its culture through writings and researches;',
        '5. participates actively in the promotion of community and environment related activities through arts and humanities; and',
        '6. manifests notable performance as an English language practitioner'
      ]
    },
    tags: ['Bachelor English']
  }, {
    name: 'Bachelor of Arts in Political Science',
    requirements: '',
    prereq: '',
    years: 4,
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Bachelor of Arts in Political Science Program aims to produce a graduate who: ',
      list: ['1. exhibits integrative knowledge and skills in managing political institutions and processes;',
        '2. assumes leadership positions in public service',
        '3. instills to others good and responsible citizenship;',
        '4. conducts research that contributes to the preservation and promotion of the nation and its political undertakings;',
        '5. sustains the effective expression and dissemination of ideas in community development activities; and',
        '6. leads in the promotion of good governance.'
      ]
    },
    tags: ['Polsci', 'Political Science']
  }, {
    name: 'Bachelor of Science in Psychology',
    requirements: '',
    prereq: '',
    years: 4,
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Bachelor of Science in Psychology Program aims to produce a graduate who: ',
      list: ['1. manifests a comprehensive knowledge in human behavior and mental processes;',
        '2. exhibits competence in the practice of the profession;',
        '3. practices ethical standards by upholding strict confidentiality of records;',
        '4. generates significant behavioral researches for theoretical advancement and practical applications;',
        '5. promotes involvement in programs that cater to community welfare and development; and',
        '6. pursues excellence through unique and creative practices in the application of principles and theories of psychology.'
      ]
    },
    tags: ['Psych', 'Pscyhology']
  }, {
    name: 'Bachelor of Arts in Music',
    requirements: '',
    prereq: '',
    years: 4,
    programType: 'Baccalaureate',
    objectives: {
      header: 'The Bachelor of Arts in Music Program aims to produce a graduate who: ',
      list: ['1. manifests specialized skills and knowledge for musical instruments, composition, and choral conducting;',
        '2. exhibits a high standard of technical ability and artistry in music;',
        '3. achieves an acceptable level of depth and breadth of repertoire;',
        '4. generates researches focused on Philippine music particularly Cordilleran indigenous music;',
        '5. promotes non-controversial music in community-related activities; and',
        '6. pursues a successful career in the field of music, both as a performer and a teacher.'
      ]
    },
    tags: ['Bachelor Music']
  }, {
    name: 'Extension classes in Music',
    requirements: '',
    prereq: '',
    years: null,
    programType: 'Special',
    objectives: {
      header: '',
      list: ['']
    },
    tags: ['Music Class']
  }, {
    name: 'Short courses in Photography and Digital Arts',
    requirements: '',
    prereq: '',
    years: null,
    programType: 'Special',
    objectives: {
      header: '',
      list: ['']
    },
    tags: ['Photography', 'Digital Arts']
  }]
};


exports.departments = [sbaa, scjps, sod, sea, sit, sihtm, sol, slahs, sns, son, ste];