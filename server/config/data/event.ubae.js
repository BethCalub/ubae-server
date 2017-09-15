// Guide Lines
// {
//   name: 'Name of Location',
//   event: 'Event Info',
//   startDate: 12/13/2017,
//   endDate: 12/14/2017,
//   type: 'OPTIONAL FOR NOW',
//   message: 'Message that UBAE will show to the user. Must be human like',
//   tags: ['Tag1', 'Tag 2'],
// }

var event = [{
  name: 'Grand Alumni Homecoming and General Assembly',
  event: 'Attire: International, Registration Fee: P200, Location: UB Cardinals Gym, 8:00am-5:00pm, September 17, 2017',
  startDate: Date.parse('Sept 17, 2017'),
  endDate: Date.parse('Sept 17, 2017'),
  type: '',
  message: 'Grand Alumni Homecoming and General Assembly will be held on the 17th of September 2017 at the UB Cardinals Gym. The event would start at 8:00am until 5:00pm. Please take note that you should be in your International attire and that there is a P200 registration fee.',
  tags: ['UBAFI', 'Grand', 'Alumni', 'Homecoming', 'General', 'Assembly'],
}, {
  name: 'SIT NIGHT ELECTRONIC DANCE FEST',
  event: 'SIT Got Talent Season 3, Spoken Poetry, Your Face Sound Familiar, Location: UB Gym, September 19, 2017, 12:00pm-7:00pm',
  startDate: Date.parse('Sept 17, 2017'),
  endDate: Date.parse('Sept 17, 2017'),
  type: '',
  message: 'The SIT Night will be held at the UB Gym on the 19th of September 2017. The event will start at 12:00pm until 7:00pm. This event would include exciting activities such as SIT Got talent Season 3, Spoken Poetry and Your Face Sound Familiar. See you there!',
  tags: ['SIT', 'Day', 'Night', 'Electronic', 'Dance', 'Fest'],
}, {
  name: 'Midterm Examinations 1st Sem SY 2017-2018',
  event: 'Midterm Examinations 1st Sem, October 17-20, 2017 SY 2017-2018',
  startDate: Date.parse('Oct 17, 2017'),
  endDate: Date.parse('Oct 20, 2017'),
  type: '',
  message: 'The midterm examinations will start on the 17th of October and will end on the 20th SY 2017-2018.',
  tags: ['Midterm', 'Examination', 'SY1718'],
}, {
  name: 'Midterm Examination for School of Law and Graduate School 1st Sem SY 2017-2018',
  event: 'Midterm Exams for School of Law and Graduate School 1st Sem, Oct 1-7,2017 SY 2017-2018',
  startDate: Date.parse('Oct 1, 2017'),
  endDate: Date.parse('Oct 7, 2017'),
  type: '',
  message: 'The midterm examination for the School of Law and Graduate School will be on October 1 to 7 of 2017 SY 2017-2018.',
  tags: ['Midterm', 'Examination', 'School', 'Law', 'Graduate', 'SY1718'],
}, {
  name: 'Final Examinations 1st Sem SY 2017-2018',
  event: 'Final Exams 1st Sem, Dec 1-6, 2017 SY 2017-2018',
  startDate: Date.parse('Dec 1, 2017'),
  endDate: Date.parse('Dec 6, 2017'),
  type: '',
  message: 'The final examinations will be on the 1st, 2nd, 4th and 6th of December 2017 SY 2017-2018.',
  tags: ['Final', 'Examination', 'SY1718'],
}, {
  name: 'Final Examination for School of Law and Graduate School 1st Sem SY 2017-2018 ',
  event: 'Final Exams for School of Law and Graduate School, 1st Sem, Nov 29, 2017 - Dec 5, 2017 SY 2017-2018',
  startDate: Date.parse('Nov 29, 2017'),
  endDate: Date.parse('Dec 5, 2017'),
  type: '',
  message: 'The final examination for the School of Law and Graduate School will be on November 1 to December 5 2017 SY 2017-2018.',
  tags: ['Final', 'Examination', 'School', 'Law', 'Graduate', 'SY1718'],
}, {
  name: 'Semestral Break 1st Sem SY 2017-2018',
  event: 'Sem Break, Dec 7, 2017 - Jan 7, 2018 SY 2017-2018',
  startDate: Date.parse('Dec 7, 2017'),
  endDate: Date.parse('Jan 7, 2018'),
  type: '',
  message: 'The Semestral Break will be on December 7, 2017 until January 7, 2018 SY 2017-2018. Happy Holidays!',
  tags: ['Semestral', 'Break', 'SY1718'],
}, {
  name: 'Enrollment for the 2nd Semester SY 2017-2018',
  event: 'Enrollment for the 2nd sem, Dec 11-16,2017 and Jan 3-6, 2018 SY 2017-2018',
  startDate: Date.parse('Dec 11, 2017'),
  endDate: Date.parse('Jan 6, 2018'),
  type: '',
  message: 'The enrollment for the 2nd Semester will start on the 11th and will end on the 16th of December 2017. We will take a short break and resume the enrollment on the 3rd until the 6th of January 2018. SY 2017-2018.',
  tags: ['Second', 'Semester', 'Enrollment', 'SY1718'],
}, {
  name: 'First Grading Examinations for the 2nd Semester SY 2017-2018',
  event: 'First Grading Examinations for the 2nd Sem, Feb 12-15, 2018 SY 2017-2018',
  startDate: Date.parse('Feb 12, 2018'),
  endDate: Date.parse('Feb 15, 2018'),
  type: '',
  message: 'The First Grading Examinations will start on the 12th of February and will end on the 15th SY 2017-2018.',
  tags: ['First', 'Examination', 'Grading', 'SY1718'],
  active: false
}, {
  name: 'Midterm Examination for School of Law and Graduate School 2nd Sem SY 2017-2018',
  event: 'Midterm Exams for School of Law and Graduate School 1st Sem, Mar 5-11,2017 2nd Sem SY 2017-2018',
  startDate: Date.parse('Mar 5, 2018'),
  endDate: Date.parse('Mar 11, 2018'),
  type: '',
  message: 'The midterm examination for the School of Law and Graduate School will be on March 5 to 11, 2018 SY 2017-2018.',
  tags: ['Midterm', 'Examination', 'School', 'Law', 'Graduate', 'SY1718'],
  active: false
}, {
  name: 'Midterm Examination 2nd Sem SY 2017-2018',
  event: 'Midterm Exams 2nd Sem, Mar 22, 23, 26, 27 2018 SY 2017-2018',
  startDate: Date.parse('Mar 22, 2018'),
  endDate: Date.parse('Mar 27, 2018'),
  type: '',
  message: 'The midterm examinations will be on March 22, 23, 26, 27 SY 2017-2018. Goodluck!',
  tags: ['Midterm', 'Examination', 'SY1718'],
  active: false
}, {
  name: 'Final Examination for School of Law and Graduate School 2nd Sem SY 2017-2018',
  event: 'Final Exam, School of Law, Graduate School, May 6 - 12, 2018 SY 2017-2018',
  startDate: Date.parse('May 6, 2018'),
  endDate: Date.parse('May 12, 2018'),
  type: '',
  message: 'The Final Examinations for the School of Law and Graduate School will be on May 6 to 12 SY 2017-2018. Goodluck!',
  tags: ['Final', 'Examination', 'School', 'Law', 'Graduate', 'SY1718'],
  active: false
}, {
  name: 'Final Examinations 2nd Sem SY 2017-2018',
  event: 'Final Exams 2nd Sem, May 8-11, 2018 SY 2017-2018',
  startDate: Date.parse('May 8, 2018'),
  endDate: Date.parse('May 11, 2018'),
  type: '',
  message: 'The final examinations will be May on 8 to 11 SY 2017-2018. Goodluck!',
  tags: ['Final', 'Examination', 'SY1718'],
  active: false
}, {
  name: 'Semestral Break 2nd Sem SY 2017-2018',
  event: 'Sem Break, May 14, 2018 - Jun 4, 2018 SY 2017-2018',
  startDate: Date.parse('May 14, 2018'),
  endDate: Date.parse('Jun 4, 2018'),
  type: '',
  message: 'The Semestral Break will be on May 14, 2018 until June 4, 2018 SY 2017-2018. Enjoy!',
  tags: ['Semestral', 'Break', 'SY1718'],
  active: false
}];

exports.event = event;
