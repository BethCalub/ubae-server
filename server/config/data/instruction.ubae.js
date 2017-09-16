// Guide Lines
// {
//   name: 'Name of Instruction',
//   process: ['Step1', 'Step2'],
//   type: 'OPTIONAL FOR NOW',
//   message: 'Message that UBAE will show to the user. Must be human like',
//   tags: ['Tag1', 'Tag 2'],
// }

// ADD ALL PROCESSES here.

var instruction = [{
  name: 'Admission for Freshmen',
  process: ['1. Go to ARC Extension to fill up form online',
    '2. Submit documents to admission area for giving your official ID number and checking of requirements',
    '3. You will then go to the respective deans office.'
  ],
  type: '',
  message: 'For the admission of freshmen, first you must go to the ARC extension and fill up the online form. After that, submit all your documents to the admission area for checking and for the creation of your official ID number. And lastly, go to the Dean\'s office of the course you want to take up.',
  tags: ['Admission', 'Freshmen', 'New', 'Student', 'ARC', 'Service', 'Admitted', 'Process']
}, {
  name: 'Admission for Transferee',
  process: ['1. Go to ARC Extension to fill up form online',
    '2. Submit documents to admission area for giving your official ID number and checking of requirements',
    '3. You will then go to the respective deans office.'
  ],
  type: '',
  message: 'For the admission of transferees, first you must go to the ARC extension and fill up the online form. After that, submit all your documents to the admission area for checking and for the creation of your official ID number. And lastly, go to the Dean\'s office of the course you want to take up.',
  tags: ['Admission', 'Transferee', 'Student', 'ARC', 'Service', 'Admitted', 'Process']
}, {
  name: 'Enrollment for Freshmen',
  process: ['1. Go to ARC Extension to fill up form online',
    '2. Submit documents to admission area for giving your official ID number and checking of requirements',
    '3. Proceed to deans office for enrollment of subjects',
    '4. Go to cashier to pay the downpayment',
    '5. Proceed to MIS for your ID and printed schedule'
  ],
  type: '',
  message: 'For freshmen enrollment, first you need to go to the ARC Extension to fill up the online form. After that, you need to submit your documents to the admission area for the checking of your documents and for the creation of your official ID number. Then you will need to proceed to the respective Dean\'s of the course you want to take up for the enrollment of subjects. For the next step, you will need to pay the required downpayment to the cashier, and lastly, go to the MIS office for the printing of your ID and schedule. ',
  tags: ['Enrollment', 'Freshmen', 'Freshman', 'New', 'Student', 'ARC', 'Service', 'Process']
}, {
  name: 'Enrollment for Transferee',
  process: ['1. Go to ARC Extension to fill up form online',
    '2. Submit documents to admission area for giving your official ID number and checking of requirements',
    '3. Proceed to deans office for enrollment of subjects',
    '4. Go to cashier to pay the downpayment',
    '5. Proceed to MIS for your ID and printed schedule'
  ],
  type: '',
  message: 'To enroll as a transferee, first you need to go to the ARC Extension to fill up the online form. After that, you need to submit your documents to the admission area for the checking of your documents and for the creation of your official ID number. Then you will need to proceed to the respective Dean\'s of the course you want to take up for the enrollment of subjects. For the next step, you will need to pay the required downpayment to the cashier, and lastly, go to the MIS office for the printing of your ID and schedule. ',
  tags: ['Enrollment', 'Transferee', 'Student', 'ARC', 'Service', 'Process']
}, {
  name: 'Enrollment for New International Student',
  process: ['1. Go to School Deans Office for approval of CRO Form 14',
    '2. Go to ARC Extension to fill up form online',
    '3. Present your Student Visa, Passport, and Authenticated School Records to the ARC Door C',
    '4. Proceed to deans office for enrollment of subjects',
    '5. Go to cashier to pay the required amount',
    '6. Proceed to MIS for your ID and printed schedule'
  ],
  type: '',
  message: 'Kindly go to the Dean\'s office of the course you would like to take up for the approval of your CRO Form 14. After it is approved, go to the ARC Extension and fill up the online form. Then go to the door C of the ARC Office and present your Student Visa, Passport and Authenticated School Records. After that, go back to the Dean\'s office for the enrollment of subjects. Then go to the cashier to pay the required downpayment. And lastly, go to the MIS Office for the printing of your schedule and ID',
  tags: ['Enrollment', 'International', 'Foreign', 'Student', 'Service', 'Process']
}, {
  name: 'Enrollment for Current Student',
  process: ['1. Go to the deans office and register your preffered subjects',
    '2. (For students with outstanding balance Proceed to Students Accounts)',
    '3. Pay the required downpayment at the Cashier',
    '4. Proceed to MIS for Application of ID and printing of schedule'
  ],
  type: '',
  message: 'Kindly go to the respective Dean\'s office of your department and register the subjects you prefer. Next step is you need to pay the required downpayment to the cashier. And lastly, proceed to the MIS Office for the printing of your schedule and ID. ',
  tags: ['Enrollment', 'Current', 'Old', 'Student', 'Service', 'Process']
}, {
  name: 'Release of Student Records for Graduates',
  process: ['1. Get clearance from Dean, Library and AMD',
    '2. Submit clearance to ARC for checking',
    '3. If there is no deficiency, ARC will release your claim stamp',
    '4. Your record will be released after 15 days'
  ],
  type: '',
  message: 'For the Realease of Student Records, first you need to get a clearance form from your Dean\'s office, the Library and AMD. Submit the clearance form to the ARC Office for checking. If there are no deficiencies, ARC will release your claim stamp. And lastly, kindly wait for 15 days for the release of your record.',
  tags: ['Release', 'Student', 'Records', 'Graduates', 'Service', 'Transcript', 'TOR', 'Scholastic', 
  'Course', 'Description', 'Clock', 'Hours', 'Diploma', 'Documentary', 'Stamp', 'HS', 'Form', '137', 'Copy', 'Grades', 'Process']
}, {
  name: 'Release of Student Records for Under-Graduates',
  process: ['1. Get clearance from Dean, Library and AMD',
    '2. Pay required amount at the Cashier',
    '3. Submit clearance to ARC for checking'
  ],
  type: '',
  message: 'Get a clearance form your Dean, the Library and the AMD. After that, you need to pay the required amount to the cashier. Lastly, present your clearance to the ARC for checking.',
  tags: ['Release', 'Student', 'Records', 'Undergraduates', 'Service', 'Process']
}, {
  name: 'Athletic Scholarship',
  process: ['1. Just go to the athletics office/ walk-in',
    '2. No requirement needed, just join training everytime and we will check if you are fit for the scholarship'
  ],
  type: '',
  message: 'Just go to the athletics office and join the training. We will check if you are fit for the scholarship',
  tags: ['Athletic', 'Scholarship', 'Service', 'Process']
}, {
  name: 'Lending of Sports Equipment',
  process: ['1. Just go to the athletics office/ walk-in',
    '2. Present valid ID'
  ],
  type: '',
  message: 'Just go to the athletics office and present your valid ID.',
  tags: ['Lending', 'Sports', 'Equipment', 'Service', 'Process']
}, {
  name: 'Student Development Facilitation and Counseling Services',
  process: ['Students can just go to the office walk-in or should be reffered by the dean, instructor, Faculty, Parents, or other University Personnel'],
  type: '',
  message: 'Kindly go to the CCSD office for them to assist your concern.',
  tags: ['Student', 'Development', 'Facilitation', 'Counseling', 'Service', 'Process']
}, {
  name: 'Psychological Testing Service',
  process: ['1. Just go to the office/walk-in'],
  type: '',
  message: 'Kindly go to the CCSD office for them to assist your concern regarding Psychological Testing.',
  tags: ['Psychological', 'Testing', 'Service', 'Process']
}, {
  name: 'Personality Test',
  process: ['1. Just go to the office/walk-in'],
  type: '',
  message: 'Kindly go to the CCSD office for them to assist your concern regarding Personality Test.',
  tags: ['Personality', 'Test', 'Service', 'Process']
}, {
  name: 'Interest Test',
  process: ['1. Just go to the office/walk-in'],
  type: '',
  message: 'Kindly go to the CCSD office for them to assist your concern regarding Interest Test.',
  tags: ['Interest', 'Test', 'Service', 'Process']
}, {
  name: 'Aptitude Test',
  process: ['1. Just go to the office/walk-in'],
  type: '',
  message: 'Kindly go to the CCSD office for them to assist your concern regarding Aptitude Test.',
  tags: ['Aptitude', 'Mental', 'Ability', 'Test', 'Service', 'Process']
}, {
  name: 'Battery Test',
  process: ['1. Just go to the office/walk-in'],
  type: '',
  message: 'Kindly go to the CCSD office for them to assist your concern regarding Battery Test.',
  tags: ['Battery', 'Test', 'Service', 'Process']
}, {
  name: 'Career and Placement Services',
  process: ['1. Just go to the office/walk-in'],
  type: '',
  message: 'Please proceed directly to the CCSD office, but you should be reffered by your dean or instructor.',
  tags: ['Career', 'Placement', 'Service', 'Process']
}, {
  name: 'Free Tooth Extraction',
  process: ['1. Go to the Clinic and consult the Dentist.',
    '2. You will then be scheduled for your tooth extraction.'
  ],
  type: '',
  message: 'Go to the Clinic and consult the dentist. You will be scheduled for your tooth extraction',
  tags: ['Tooth', 'Removal', 'Extraction', 'Service', 'Process']
}, {
  name: 'Minor Surgery',
  process: ['1. Go to the Clinic and see the doctor.',
    '2. The procedure will then be explained and scheduled',
    '3. Give payment to the Cashier.'
  ],
  type: '',
  message: 'Kindly go to the clinic and see the doctor. The procedure will be explained there and you will be scheduled for the surgery. Dont forget to pay the required amount to the cashier.',
  tags: ['Minor', 'Surgery', 'Suturing', 'Excision', 'Circumcision', 'Service', 'Process']
}, {
  name: 'Physical Examination',
  process: ['1. Get checklist from the Clinic.',
    '2. Give payment to the Cashier.',
    '3. You will then be examined for X-ray, Dental and other required Medical Examinations'
  ],
  type: '',
  message: 'To avail of the Physical Examination, first get the checklist from the clinic and pay the required amount to the cashier. Then you can proceed to the Physical Examination such as X Ray, Dental and other Medical Examinations.',
  tags: ['Physical', 'Examination', 'Service', 'Process']
}, {
  name: 'Facilitation of Accident Insurance',
  process: ['1. Get all the receipts incurred in the hospital.',
    '2. Give receipts to the Clinic.'
  ],
  type: '',
  message: 'Get all the receipts incurred in the hospital and show it to the University clinic.',
  tags: ['Facilitation', 'Accident', 'Insurance', 'Service', 'Process']
}, {
  name: 'Radiology and Medtech/Clinical Laboratory Services',
  process: ['1. Go to the Clinic to get request',
    '2. You will then be scheduled to for your service.'
  ],
  type: '',
  message: 'Kindly give your request to the clinic and be scheduled for this service. ',
  tags: ['Radiology', 'Medtech', 'Clinical', 'Laboratory', 'Service', 'Process']
}, {
  name: 'Vaccinations',
  process: ['1. Go to the Clinic and present your Valid ID.'],
  type: '',
  message: 'Kindly proceed to the clinic and present your valid ID',
  tags: ['Vaccination', 'Service', 'Process']
}, {
  name: 'X-Ray',
  process: ['1. Go to the clinic to ask request.',
    '2. Give the payment to the cashier.'
  ],
  type: '',
  message: 'Go to the clinic and request for an X-Ray. Kindly pay the required amount to the cashier and proceed to the X-Ray Laboratory.',
  tags: ['X', 'Ray', 'Service', 'Process']
}, {
  name: 'Consultation',
  process: ['1. Proceed to the clinic student assistant and present your valid ID.',
    '2. Fill up your patients card if your a new patient',
    '3. Verbalize your complaints or reason for consultation to the Nurse.',
    '4. Have your vital signs recorded and proceed to the Physician for check-up.',
    '5. Get your medicine from the Nurse.'
  ],
  type: '',
  message: 'Kindly proceed to the clinic and present you valid ID. If you\'re a new patient, please fill up the Patients Card. State your complaints to the nurse and have your vital signs checked. After that, proceed to the physician for the check-up. Lastly, get your medicine from the nurse. Get Well Soon!',
  tags: ['Check', 'Up', 'Consultation', 'Service', 'Process']
}, {
  name: 'Medical Certificate',
  process: ['1. Consult the University Doctor'],
  type: '',
  message: 'Please consult the doctor for this concern. If you were sent home by the Doctor, that is the only time you can be given a Medical Certificate.',
  tags: ['Medical', 'Certificate', 'Service', 'Process']
}, {
  name: 'Physical/Medical Examination for local OJT/ Practicum (SIHTM)',
  process: ['1. Proceed to the Baguio Health Department for the initial medical examination',
    '2. Collect all the results (CBC, Urinalysis, Chest X-ray and Fecalysis)',
    '3. Collate the results then the MD will assess you.',
    '*If all the exams are within the normal limits, you will be given the Health Certificate',
    '*If one or more parameters are not normal, your Health Certificate will be withheld until after treatment, and the patient may be reffered to a specialist or for further diagnostic examination.'
  ],
  type: '',
  message: 'Kindly proceed to the Baguio Health Department for the initial medical examination. Collect all the results and the MD will asess you.',
  tags: ['Physical', 'Medical', 'Examination', 'Local', 'Practicum', 'OJT', 'SIHTM', 'Service', 'Process']
}, {
  name: 'Physical/Medical Examination for local OJT/ Practicum (Non-SIHTM Students)',
  process: ['1. Proceed to the clinic to obtain your checklist and undergo the procedures.',
    '2. Collate the results then the MD will assess you.',
    '*If all the exams are within the normal limits, you will be given the Health Certificate',
    '*If one or more parameters are not normal, your Health Certificate will be withheld until after treatment, and the patient may be reffered to a specialist or for further diagnostic examination.'
  ],
  type: '',
  message: 'Get a checklist from the clinic before undergoing the procedures. Collate the results and then the MD will asess you.',
  tags: ['Physical', 'Medical', 'Examination', 'Local', 'OJT', 'Practicum', 'Service', 'Process']
}, {
  name: 'Physical/Medical Examination for International OJT',
  process: ['1. Present the endorsement letter to the Medical Clinic Staff to obtain a Physical Exam Checklist.',
    '2. Undergo the different examinations in the checklist.',
    '3. Collate the results and present to the Clinic Student Assistant',
    '4. Proceed to the MD for the Physical Examination and issuance of Health Certificate.'
  ],
  type: '',
  message: 'Present the endorsement letter to the medical clinic staff to obtain a Physical Exam Checklist. Undergo the different examinations from the checklist. Collate the results and give it to the student assistant. Lastly, proceed to the MD for the Physical Examination and issuancd of your certificate.',
  tags: ['Physical', 'Medical', 'Examination', 'International', 'IOJT', 'Service', 'Process']
}, {
  name: 'UBCARES Program',
  process: ['Just go to the ECOS Office for application'],
  type: '',
  message: 'If you want to volunteer for the outreach, kindly go to the ECOS office for the application.',
  tags: ['UBCARES', 'program', 'Outreach', 'Volunteer', 'Service', 'Process']
}, {
  name: 'Processes International On The Job Training (IOJT) applicants and exchange scholars',
  process: ['1. Give approval sheet/form from dean and consent from parent'],
  type: '',
  message: 'Kindly get an approval from your dean and consent from your parents and submit it to the LARC Office.',
  tags: ['IOJT', 'International', 'Job', 'Training', 'Service', 'Process']
}, {
  name: 'Assists the UBAFI in issuing the membership identification cards of its members.',
  process: ['1. Signing clearance form for Alumni ID'],
  type: '',
  message: 'Go to the LARC office and get your clearance form signed for the Alumni ID. ',
  tags: ['UBAFI', 'Alumni', 'ID', 'Service', 'Process']
}, {
  name: 'Gives copies of PRC Board Syllabi for STE Students',
  process: ['1. Just go to the Review Center or Print copy from website'],
  type: '',
  message: 'Please go to the LARC office to get a copy of PRC Board Syllabi for STE Students',
  tags: ['PRC', 'Board', 'Syllabi', 'Service', 'Process']
}, {
  name: 'Follet-DLM Mobile Application',
  process: ['1. Download and install Destiny Quest mobile app from the app store or Google Play.',
    '2. Launch the Destiny Quest mobile app.',
    '3. Enter your Destiny URL (follett.ubaguio.edu) and tap Connect.',
    '4. Select your school Library.',
    '5. Enter your User ID and Password. Username: ID NUMBER (eg. 150016)  Password: SURNAME (eg. delacruz)',
    '6. Tap Log in.'
  ],
  type: '',
  message: 'For the Follet-DLM Mobile App, first you need to download and install the Destiny Quest Mobile app which is available from the App Store or Google Play. Lauch the app and enter the URL: (follett.ubaguio.edu) and tap Connect. Select your school library and enter your username which is your ID Number and your password as your last name. Tap login and Enjoy.',
  tags: ['Follet', 'DLM', 'Mobile', 'Application', 'Service', 'Process']
}, {
  name: 'Journals',
  process: ['Proceed to the library with a valid ID'],
  type: '',
  message: 'Kindly proceed to the library with a valid ID to read available journals.',
  tags: ['Journals', 'Books', 'Magazines', 'Newspapers', 'Service', 'Process']
}, {
  name: 'New Library Databases/E-Journals',
  process: ['A. For gale group',
    '1a. type in url www.infotrac.galegroup.com/itweb/phubagu',
    '2a. type in PASSWORD: discover',
    'B. For Worldbook online',
    '1b. depending on department type in username SBAA:ubstud2016sbaa SIHTM:ubstud2016sihtm SIT:ubstud2016sit GRADSCHL:ubstud2016gradsc',
    '2b. type in password corresponding the username SBAA:alibangbang SIHTM:cabellero SIT:eucalyptus GRADSCHL:tigerlily',
    'C. For DOST-STARBOOKS',
    '1c. go to www.starbooks.ph',
    '2c. type in USERNAME: universityofbaguio',
    '3c. type in PASSWORD: 123456'
  ],
  type: '',
  message: 'For gale group, type in URL www.infotrac.galegroup.com/itweb/phubagu , the password is discover. For Worldbook online, the username and password will depend on your department. SBAA username: ubstud2016sbaa pw: alibangbang / SIHTM username: ubstud2016sihtm pw: cabellero / SIT username: ubstud2016sit pw: ubstud2016sit / GRADSCHL username: ubstud2016gradsc pw: tigerlily. For DOST-STARBOOKS, go to www.starbooks.ph, the username is universityofbaguio and the password is 123456.',
  tags: ['New', 'Library', 'Databases', 'Ejournals', 'Service', 'Process', 'Worldbook', 'Starbooks']
}, {
  name: 'Clearance Signing',
  process: ['Proceed to the Library with valid ID'],
  type: '',
  message: 'Kindly proceed to the library with your valid ID for clearance signing.',
  tags: ['Library', 'Clearance', 'Signing', 'Service', 'Process']
}, {
  name: 'Library Orientation',
  process: ['1. Just go to the Centennial Library for Library Orientation Request'],
  type: '',
  message: 'Please proceed to the Centennial Library to request a Library Orientation. Be sure to bring your valid ID.',
  tags: ['Library', 'Orientation', 'Service', 'Process']
}, {
  name: 'Computers for Internet Surfing in the Library',
  process: ['Proceed to the library with a valid ID'],
  type: '',
  message: 'Kindly proceed to the library with a valid ID to use the computers for internet surfing.',
  tags: ['Computer', 'Internet', 'Surfing', 'Library', 'Service', 'Process']
}, {
  name: 'Discussion Rooms',
  process: ['1. Fill up Discussion Room Reservation Form'],
  type: '',
  message: 'Please proceed to the library and fill up the Discussion Room Reservation Form.',
  tags: ['Discussion', 'Rooms', 'Library', 'Service', 'Process']
}, {
  name: 'Press Releases and Advertisements',
  process: ['1. Go to MAPS Office and fill up the Ad Requisition Form',
    '2. Dean and VP Administration must sign the form',
    '3. Return form to MAPS office'
  ],
  type: '',
  message: 'If you want your advertisements to be published, kindly go to the MAPS Office and fill up the Ad Requisition Form and ask your Dean and VP for Administration to sign it. If it is already signed, come back to the MAPS Office with the signed form.',
  tags: ['Press', 'Releases', 'Advertisements', 'Ads', 'Service', 'Process']
}, {
  name: 'Yearbook and Graduation Materials',
  process: ['1. Fill up and submit the form to the MAPS Office'],
  type: '',
  message: 'Kindly go to the MAPS Office and fill up the required form. ',
  tags: ['Yearbook', 'Graduation', 'Materials', 'Service', 'Process']
}, {
  name: 'Social Media Content Development',
  process: ['1. Go to MAPS Office and fill up the Ad Requisition Form',
    '2. Dean and VP Administration must sign the form',
    '3. Return form to MAPS office'
  ],
  type: '',
  message: 'Kindly go to the MAPS Office and fill up the Ad Requisition Form. Ask for your Dean and the VP for Administration sign the form. If it is signed, go back to the MAPS Office.',
  tags: ['Social', 'Media', 'Content', 'Development', 'Service', 'Process']
}, {
  name: 'Website Content Development',
  process: ['1. Go to MAPS Office and fill up the Ad Requisition Form',
    '2. Dean and VP Administration must sign the form',
    '3. Return form to MAPS office'
  ],
  type: '',
  message: 'Kindly go to the MAPS Office and fill up the Ad Requisition Form. Ask for your Dean and the VP for Administration sign the form. If it is signed, go back to the MAPS Office.',
  tags: ['Website', 'Content', 'Development', 'Service', 'Process']
}, {
  name: 'Virus Scanning and Removal for Flash Drives and Portable Hard Disk',
  process: ['1. Go to the MIS office',
    '2. Present your valid ID'
  ],
  type: '',
  message: 'If your USB or Portable Hard Disk gets virused, go to the MIS Office with your valid ID. They will scan your device and remove the virus.',
  tags: ['Virus', 'Scanning', 'Removal', 'Flash', 'Drive', 'Portable', 'Hard', 'Disk', 'Service', 'Process']
}, {
  name: 'Assessment of PC or Laptop',
  process: ['1. Go to the MIS office',
    '2. Present your valid ID'
  ],
  type: '',
  message: 'If you want your PC or Laptop to be assessed, go to the MIS Office with your valid ID and your unit. Take note that MIS will only assess your unit and not repair it.',
  tags: ['Assessment', 'PC', 'Laptop', 'Service', 'Process']
}, {
  name: 'Installation of Open-Source or Free Software',
  process: ['1. Go to the MIS office',
    '2. Present your valid ID'
  ],
  type: '',
  message: 'Proceed to the MIS Office and present your valid ID. Bring your device or flash drive for the installer. Please take note that only open-source and free softwares are the only ones you can avail.',
  tags: ['Installation', 'Open', 'Source', 'Free', 'Software', 'Service', 'Process']
}, {
  name: 'Printing and Validation of Student ID',
  process: ['1A. Go to the MIS office and present your receipt',
    '2A. You will then be asked for your signature',
    '3A. You will then have your ID picture.',
    '1B. Fill up replacement form from student affairs',
    '2B. Pay fee to the cashier',
    '3B. Go to the MIS office and present your replacement form and receipt',
    '4B. You will then be asked for your signature',
    '5B. You will then have your ID picture.',
    '1C. Go to the MIS office',
    '2C. Present your valid ID'
  ],
  type: '',
  message: 'Go to the MIS Office and present your official receipt.',
  tags: ['Printing', 'Validation', 'Student', 'ID', 'Service', 'Process']
}, {
  name: 'Replacement of Student ID',
  process: ['1. Fill up replacement form from student affairs',
    '2. Pay fee to the cashier',
    '3. Go to the MIS office and present your replacement form and receipt'
  ],
  type: '',
  message: 'To replace your Student ID, first you need to go to OSA and fill up the replacement form. Then you need to pay the required amount to the cashier. Now you can proceed to MIS and present the receipt.',
  tags: ['Replacement', 'Student', 'ID', 'Service', 'Process']
}, {
  name: 'Printing of Alumni and Other IDs',
  process: ['1. Go to the MIS office and present your clearance form',
    '2. You will then be asked for your signature',
    '3. You will then have your ID picture.'
  ],
  type: '',
  message: 'Proceed to the MIS Office and present your clearance form. They will ask for your signature and have your ID processed.',
  tags: ['Alumni', 'Other', 'ID', 'Service', 'Process']
}, {
  name: 'Creation of Wi-Fi Account',
  process: ['1. Go to the MIS office and request for an account',
    '2. Present valid ID'
  ],
  type: '',
  message: 'If you want to have your own Wi Fi account, go to the MIS Office and present your valid ID and ask them to create an account for you.',
  tags: ['WiFi', 'Account', 'Service', 'Process']
}, {
  name: 'Readmissions',
  process: ['1. Go to the office of student affairs',
    '2. Fill up AMC form/ Readmission slip'
  ],
  type: '',
  message: 'Proceed to OSA and fill up the readmission slip. Be sure to bring your valid ID.',
  tags: ['Readmission', 'Dropped', 'Class', 'Card', 'Readmitted', 'Service', 'Process']
}, {
  name: 'Performing Arts',
  process: ['1. Go to student account and fill up scholarship form or yellow form',
    '2. Proceed to OSA, the office Director will be the one to process'
  ],
  type: '',
  message: 'Go to the Students Accounts Section and fill up the yellow form. Proceed to OSA and the office director will be the one to process your application.',
  tags: ['Performing', 'Arts', 'Scholarship', 'Service', 'Process']
}, {
  name: 'Format Editing',
  process: ['1. Go to the RNDC office',
    '2. Submit a copy of your study or a copy of manuscript.',
    '3. Go to the RNDC Office and login to the log book'
  ],
  type: '',
  message: 'For Format Editing, go to the RNDC and submit a copy of your study or manuscript. Be sure to sign the log book.',
  tags: ['Format', 'Editing', 'Service', 'Process']
}, {
  name: 'Statistic Package for Social Sciences',
  process: ['1. Go to the RNDC Office and get referral slip.',
    '2. Submit a copy of your study or a copy of manuscript.',
    '3. The office will be the one to reffer you with a statistician.'
  ],
  type: '',
  message: 'Go to the RNDC and get a referral slip. Submit a copy of your study and manuscript and the office will be the one to reffer you to a statistician.',
  tags: ['Statistic', 'Package', 'Social', 'Sciences', 'SPSS', 'Service', 'Process']
}, {
  name: 'Poster Preparation',
  process: ['1. Give a request letter with the poster size, font, color, text and other information about your poster.',
    '2. Submit Request Letter to the RNDC Office.'
  ],
  type: '',
  message: 'For Poster Preparation, sumbit a request letter to RNDC with the poster size, font, color. text and other information about your poster.',
  tags: ['Poster', 'Preparation', 'Service', 'Process']
}, {
  name: 'Publication of Research Findings (Catalyst)',
  process: ['1. Submit Full manuscript to RNDC.',
    '2. Sign the Consent to publish and transfer of copyright.',
    '3. Your research will then undergo tool validation verification.',
    '4. Submit ethics clearance.',
    '5. If your study is quantitative, your research will be verified by a statistician.'
  ],
  type: '',
  message: 'Submit your full manuscript and ethics clearance to RNDC and sign the consent to publish and transfer of copyright. Your research will undergo tool validation verification. If your study in quantitative, you will be reffered to a statistician.',
  tags: ['Publication', 'Research', 'Findings', 'Catalyst', 'Service', 'Process']
}, {
  name: 'Tool Validation',
  process: ['1. Go to the RNDC Office and submit requirements'],
  type: '',
  message: 'Go to RNDC and submit all the requirements for Tool Validation.',
  tags: ['Tool', 'Validation', 'Service', 'Process']
}, {
  name: 'Grammar Check',
  process: ['1. Go to the RNDC Office and login to the log book',
    '2. Send Manuscript to RNDC email.'
  ],
  type: '',
  message: 'For Grammar Check, go to the RNDC and login to the logbook and send a Manuscript to the RNDC email.',
  tags: ['Grammar', 'Check', 'Service', 'Process']
}, {
  name: 'Plagiarism Test',
  process: ['1. Go to the RNDC Office and login to the log book',
    '2. Send Manuscript to RNDC email.'
  ],
  type: '',
  message: 'For Plagiarism Test, go to the RNDC and login to the logbook and send a Manuscript to the RNDC email.',
  tags: ['Plagiarism', 'Test', 'Service', 'Process']
}, {
  name: 'Spell Check',
  process: ['1. Go to the RNDC Office and login to the log book',
    '2. Send Manuscript to RNDC email.'
  ],
  type: '',
  message: 'For Spell Check, go to the RNDC and login to the logbook and send a Manuscript to the RNDC email.',
  tags: ['Spell', 'Check', 'Service', 'Process']
}, {
  name: 'Use of computers',
  process: ['1. Go to the RNDC Office and login to the log book'],
  type: '',
  message: 'If you need to use a computer, you can use one from the RNDC just login to the logbook. Be sure to bring a valid ID.',
  tags: ['Computer', 'Service', 'Process']
}, {
  name: 'In-charge of issuance of Assessment of School Fees/Accounts Inquiry',
  process: ['1. Go to the the designated assessment windows',
    '2. Present your valid ID.'
  ],
  type: '',
  message: 'Go to the Students Accounts Section for assessment of school fees or accounts inquiry.',
  tags: ['Assessment', 'Fee', 'Accounts', 'Service', 'Process']
}, {
  name: 'Issuance of Examination Permits',
  process: ['1. Secure their assessment of fees',
    '2. Pay the minimum required payment',
    '3. Get your permit on the specified window of your department'
  ],
  type: '',
  message: 'To claim your examination permit, go to the Students Accounts Section with your Assessment of Fees and receipt for your tuition fee.',
  tags: ['Examination', 'Permit', 'Service', 'Process']
}, {
  name: 'Issuance of Clearance for the Release of School Credentials',
  process: ['1. Submit clearance form to the Student Accounts Section',
    '2. The Office will oversee if the student paid all his/her tuition fee and other fees.',
    '*If the you already paid all your fees, your clearance form will be signed',
    '*If the you have an outstanding balance, you should pay your fee first'
  ],
  type: '',
  message: 'For the issuance of clearance for the release of school credentials, first you need to submit your clearance form to the Students Accounts Section. The Office will review your account if it has deficiencies.',
  tags: ['Clearance', 'Release', 'School', 'Credentials', 'Service', 'Process']
}, {
  name: 'Investigate Complaints, Offenses, Reports, and any Other Unusual or Suspicious Activities in the Campus',
  process: ['1. Before the students are brought to the OSA, they will first conduct an investigation with the parties involved.',
    '*The office will conduct the investigation by retrieving CCTV Footages and interviewing.',
    '*If both parties are not yet fine, or no one admitted their misconduct, they will be brought to OSA.'
  ],
  type: '',
  message: 'If you have certain complaints in school regarding security, you can go to the Security Office so they can investigate regarding your complaints.',
  tags: ['Offenses', 'Report', 'Suspicious', 'Investigation', 'Service', 'Process']
}, {
  name: 'Lost & Found',
  process: ['1. Bring the Item to the Security Office or give the item to the marshalls'],
  type: '',
  message: 'If you found a lost item, you can give it to the Security Office and report it as Lost and Found. Or if you lost something, you can try to ask if someone honest found your belonging.',
  tags: ['Lost', 'Found', 'Service', 'Process']
}, {
  name: 'Security Contact',
  process: ['1. Dial 442-4915 or local no. 234/309',
    '2. Report emergencies and Criminal Activities'
  ],
  type: '',
  message: 'In case of emergency, you can contact our Security Office using these numbers: 442-4915 or local no. 234/309.',
  tags: ['Security', 'Contact', 'Emergency', 'Service', 'Process']
}, {
  name: 'Student Organization',
  process: ['Seek for information on your respective Dean\'s Office'],
  type: '',
  message: 'Regarding student organizations, seek for more information to your respective Dean\'s office.',
  tags: ['Student', 'Organization', 'Org', 'Government']
}, {
  name: 'Certificate Request to ARC for Graduates ',
  process: '2nd Floor, D Building, Beside UB Gym',
  type: '',
  message: 'If you are a graduate, you need to get a clearance form from the Dean\'s Office, Library and AMD. After being cleared, you need to proceed to the ARC for checking. If there are no deficiencies, ARC will release your claim stamp and your record will be released after 15 days. ',
  tags: ['Certificate', 'Enrollment', 'Grades', 'Earned', 'Units', 'GWA', 'General', 'Weighted', 'Average', 'English', 'Medium', 'Instruction', 'Attendance', 'Graduate']
}, {
  name: 'Certificate Request to ARC for Under Graduates ',
  process: '2nd Floor, D Building, Beside UB Gym',
  type: '',
  message: 'If you are an under graduate, you need to get a clearance form from the Dean\'s Office, Library and AMD. After being cleared, you need to proceed to the ARC for checking. If there are no deficiencies, ARC will release your claim stamp and your record will be released after 15 days. ',
  tags: ['Certificate', 'Enrollment', 'Grades', 'Earned', 'Units', 'GWA', 'General', 'Weighted', 'Average', 'English', 'Medium', 'Instruction', 'Attendance', 'Under', 'Graduate']
}];

exports.instruction = instruction;
