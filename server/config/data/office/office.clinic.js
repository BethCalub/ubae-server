'use strict';
exports.clinic = {
  office: 'University Clinic',
  description: 'Offers students free Medical and Dental Services',
  location: {
    bldg: 'F',
    floor: '1st',
    room: 'F105'
  },
  tags: ['University Clinic', 'Clinic'],
  services: [{
    name: 'Free tooth extraction',
    description: 'Available for UB Students and Employees',
    requirements: 'Valid ID',
    process: ['1. Go to the Clinic and consult the Dentist.',
      '2. You will then be scheduled for your tooth extraction.'
    ],
    tags: ['Free tooth extraction', 'tooth extraction']
  }, {
    name: 'Minor Surgery',
    description: 'Available for UB Students and Employees. Minor surgeries includes Suturing, Excision, and Circumcision.',
    requirements: 'Valid ID',
    process: ['1. Go to the Clinic and see the doctor.',
      '2. The procedure will then be explained and scheduled',
      '3. Give payment to the Cashier.'
    ],
    tags: ['Minor Surgery', 'Suturing', 'Excision', 'Circumcision']
  }, {
    name: 'Physical Examination',
    description: 'Physical Examination for OJTs, Practicum, Competitions and Clinical exposure.',
    requirements: ['Checklist from Clinic', 'Valid ID'],
    process: ['1. Get checklist from the Clinic.',
      '2. Give payment to the Cashier.',
      '3. You will then be examined for X-ray, Dental and other required Medical Examinations'
    ],
    tags: 'Physical Examination'
  }, {
    name: 'Facilitation of Accident Insurance',
    description: 'If a student or employee had an accident inside the campus, the university will be the one to pay all the hospital bills.',
    requirements: 'Receipts',
    process: ['1. Get all the receipts incurred in the hospital.',
      '2. Give receipts to the Clinic.'
    ],
    tags: ['Facilitation of Accident Insurance', 'Accident Insurance']
  }, {
    name: 'Radiology and Medtech/Clinical Laboratory Services',
    description: 'Available for UB Students and Employees',
    requirements: 'Valid ID',
    process: ['1. Go to the Clinic to get request',
      '2. You will then be scheduled to for your service.'
    ],
    tags: ['Radiology Service', 'Radiology', 'Medtech Laboratory', 'Clinic Laboratory']
  }, {
    name: 'Vaccinations',
    description: 'Vaccinations(Hep B; Influenza Vaccine/AH1N1 vaccine; Cervical Cancer; Anti-pneumonia) available for UB Students, employees and UB Partner Communities.',
    requirements: 'Valid ID',
    process: '1. Go to the Clinic and present your Valid ID.',
    tags: ['Vaccinations', 'Hep B Vaccine', 'Influenza Vaccine', 'AH1N1 Vaccine', 'Cervical Cancer Vaccine', 'Anti-pneumonia Vaccine']
  }, {
    name: 'X-ray',
    description: 'The University offers X-Ray service for all.',
    requirements: 'Payment Receipt',
    process: ['1. Go to the clinic to ask request.',
      '2. Give the payment to the cashier.'
    ],
    tags: 'X-ray'
  }, {
    name: 'Consultation',
    description: 'Available for UB Students and Employees',
    requirements: 'Valid ID',
    process: ['1. Proceed to the clinic student assistant and present your valid ID.',
      '2. Fill up your patients card if your a new patient',
      '3. Verbalize your complaints or reason for consultation to the Nurse.',
      '4. Have your vital signs recorded and proceed to the Physician for check-up.',
      '5. Get your medicine from the Nurse.'
    ],
    tags: ['Consultation', 'Check-up', 'Consult']
  }, {
    name: 'Medical Certificate',
    description: 'Issuing medical certificate for students who was sent home',
    requirements: ['If seen by another Medical Doctor, present a valid Medical Certificate from the MD', 'If hospitalized, get a valid Medical Certificate from the Hospital.'],
    process: ['1. Consult the University Doctor', '*Medical Certificate will be issued if the Doctor instructed you to go home.'],
    tags: ['Medical Certificate', 'TAG 2']
  }, {
    name: 'Physical/Medical Examination for local OJT/ Practicum (SIHTM)',
    description: 'Available for UB Students',
    requirements: 'Results from initial Medical Examination',
    process: ['1. Proceed to the Baguio Health Department for the initial medical examination',
      '2. Collect all the results (CBC, Urinalysis, Chest X-ray and Fecalysis)',
      '3. Collate the results then the MD will assess you.',
      '*If all the exams are within the normal limits, you will be given the Health Certificate',
      '*If one or more parameters are not normal, your Health Certificate will be withheld until after treatment, and the patient may be reffered to a specialist or for further diagnostic examination.'
    ],
    tags: ['Physical Examination', 'Physical Exam for local OJT SIHTM', 'Physical Examination SIHTM', 'Medical Examination', 'Medical Exam for local OJT SIHTM', 'Medical Examination SIHTM']
  }, {
    name: 'Physical/Medical Examination for local OJT/ Practicum (Non-SIHTM Students)',
    description: 'Available for UB Students',
    requirements: 'Checklist from the Clinic',
    process: ['1. Proceed to the clinic to obtain your checklist and undergo the procedures.',
      '2. Collate the results then the MD will assess you.',
      '*If all the exams are within the normal limits, you will be given the Health Certificate',
      '*If one or more parameters are not normal, your Health Certificate will be withheld until after treatment, and the patient may be reffered to a specialist or for further diagnostic examination.'
    ],
    tags: ['Physical Examination', 'Physical Exam for local OJT', 'Medical Examination', 'Medical Exam for local OJT/', 'Medical Examination']
  }, {
    name: 'Physical/Medical Examination for International OJT   ',
    description: 'Available for UB Students',
    requirements: 'Endorsement Letter',
    process: ['1. Present the endorsement letter to the Medical Clinic Staff to obtain a Physical Exam Checklist.',
      '2. Undergo the different examinations in the checklist.',
      '3. Collate the results and present to the Clinic Student Assistant',
      '4. Proceed to the MD for the Physical Examination and issuance of Health Certificate.',
      '*If all the exams are within the normal limits, you will be given the Health Certificate',
      '*If one or more parameters are not normal, your Health Certificate will be withheld until after treatment, and the patient may be reffered to a specialist or for further diagnostic examination.'
    ],
    tags: ['Physical Examination', 'Physical Exam for International OJT', 'Medical Examination', 'Medical Exam for International OJT', 'Medical Examination International OJT']
  }]
};
