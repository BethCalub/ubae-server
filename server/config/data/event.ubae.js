// Guide Lines
// {
//   name: 'Name of Location',
//   details: 'Event Info',
//   startDate: 12/13/2017,
//   endDate: 12/14/2017,
//   type: 'OPTIONAL FOR NOW',
//   message: 'Message that UBAE will show to the user. Must be human like',
//   tags: ['Tag1', 'Tag 2'],
// }

var event = [{
  name: 'Midterm Examinations 1st Sem SY 2017-2018',
  details: 'Midterm Examinations 1st Sem, October 17-20, 2017 SY 2017-2018',
  startDate: Date.parse('Oct 17, 2017'),
  endDate: Date.parse('Oct 20, 2017'),
  type: 'WHEN',
  message: 'The midterm examinations of the 1st semester will start on the 17th of October and will end on the 20th SY 2017-2018.',
  tags: ['Midterms', 'Examinations', 'Exams', 'SY1718', '1st', 'First', 'Semester'],
  active: false
}, {
  name: 'Midterm Examination for School of Law and Graduate School 1st Sem SY 2017-2018',
  details: 'Midterm Exams for School of Law and Graduate School 1st Sem, Oct 1-7,2017 SY 2017-2018',
  startDate: Date.parse('Oct 1, 2017'),
  endDate: Date.parse('Oct 7, 2017'),
  type: 'WHEN',
  message: 'The midterm examination of the 1st semester for the School of Law and Graduate School will be on October 1 to 7 of 2017 SY 2017-2018.',
  tags: ['Midterms', 'Exams', 'Examinations', 'School', 'Law', 'Graduate', 'SY1718', '1st', 'First', 'Semester'],
  active: false
}, {
  name: 'Final Examinations 1st Sem SY 2017-2018',
  details: 'Final Exams 1st Sem, Dec 1-6, 2017 SY 2017-2018',
  startDate: Date.parse('Dec 1, 2017'),
  endDate: Date.parse('Dec 6, 2017'),
  type: 'WHEN',
  message: 'The final examinations of the 1st semester will be on the 1st, 2nd, 4th and 6th of December 2017 SY 2017-2018.',
  tags: ['Final', 'Examinations', 'Exams', 'SY1718', '1st', 'First', 'Semester'],
}, {
  name: 'Final Examination for School of Law and Graduate School 1st Sem SY 2017-2018 ',
  details: 'Final Exams for School of Law and Graduate School, 1st Sem, Nov 29, 2017 - Dec 5, 2017 SY 2017-2018',
  startDate: Date.parse('Nov 29, 2017'),
  endDate: Date.parse('Dec 5, 2017'),
  type: 'WHEN',
  message: 'The final examination of the 1st semester for the School of Law and Graduate School will be on November 1 to December 5 2017 SY 2017-2018.',
  tags: ['Final', 'Examinations', 'Exams', 'School', 'Law', 'Graduate', 'SY1718', '1st', 'First', 'Semester'],
}, {
  name: 'Semestral Break 1st Sem SY 2017-2018',
  details: 'Sem Break, Dec 7, 2017 - Jan 7, 2018 SY 2017-2018',
  startDate: Date.parse('Dec 7, 2017'),
  endDate: Date.parse('Jan 7, 2018'),
  type: 'WHEN',
  message: 'The Semestral Break for the 1st semester will start on December 7, 2017 until January 7, 2018 SY 2017-2018. Happy Holidays!',
  tags: ['Semestral', 'Break', 'SY1718', '1st', 'First', 'Semester'],
}, {
  name: 'Enrollment for the 2nd Semester SY 2017-2018',
  details: 'Enrollment for the 2nd sem, Dec 11-16,2017 and Jan 3-6, 2018 SY 2017-2018',
  startDate: Date.parse('Dec 11, 2017'),
  endDate: Date.parse('Jan 6, 2018'),
  type: 'WHEN',
  message: 'The enrollment for the 2nd Semester will start on the 11th and will end on the 16th of December 2017. We will take a short break and resume the enrollment on the 3rd until the 6th of January 2018. SY 2017-2018.',
  tags: ['Second', 'Semester', 'Enrollment', 'SY1718', '2nd'],
}, {
  name: 'First Grading Examinations for the 2nd Semester SY 2017-2018',
  details: 'First Grading Examinations for the 2nd Sem, Feb 12-15, 2018 SY 2017-2018',
  startDate: Date.parse('Feb 12, 2018'),
  endDate: Date.parse('Feb 15, 2018'),
  type: 'WHEN',
  message: 'The First Grading Examinations for the 2nd semester will start on the 12th of February and will end on the 15th SY 2017-2018.',
  tags: ['First', 'Examinations', 'Exams', 'Grading', 'SY1718', '2nd', 'second', 'semester'],
  active: false
}, {
  name: 'Midterm Examination for School of Law and Graduate School 2nd Sem SY 2017-2018',
  details: 'Midterm Exams for School of Law and Graduate School 1st Sem, Mar 5-11,2017 2nd Sem SY 2017-2018',
  startDate: Date.parse('Mar 5, 2018'),
  endDate: Date.parse('Mar 11, 2018'),
  type: 'WHEN',
  message: 'The midterm examination of the 2nd semester for the School of Law and Graduate School will be on March 5 to 11, 2018 SY 2017-2018.',
  tags: ['Midterms', 'Examinations', 'Exams', 'School', 'Law', 'Graduate', 'SY1718', '2nd', 'second', 'semester'],
  active: false
}, {
  name: 'Midterm Examination 2nd Sem SY 2017-2018',
  details: 'Midterm Exams 2nd Sem, Mar 22, 23, 26, 27 2018 SY 2017-2018',
  startDate: Date.parse('Mar 22, 2018'),
  endDate: Date.parse('Mar 27, 2018'),
  type: 'WHEN',
  message: 'The midterm examinations of the 2nd semester will be on March 22, 23, 26, 27 SY 2017-2018. Goodluck!',
  tags: ['Midterms', 'Examinations', 'Exams', 'SY1718', '2nd', 'second', 'semester'],
  active: false
}, {
  name: 'Final Examination for School of Law and Graduate School 2nd Sem SY 2017-2018',
  details: 'Final Exam, School of Law, Graduate School, May 6 - 12, 2018 SY 2017-2018',
  startDate: Date.parse('May 6, 2018'),
  endDate: Date.parse('May 12, 2018'),
  type: 'WHEN',
  message: 'The Final Examinations of the 2nd semester for the School of Law and Graduate School will be on May 6 to 12 SY 2017-2018. Goodluck!',
  tags: ['Final', 'Examinations', 'Exams', 'School', 'Law', 'Graduate', 'SY1718', '2nd', 'second', 'semester'],
  active: false
}, {
  name: 'Final Examinations 2nd Sem SY 2017-2018',
  details: 'Final Exams 2nd Sem, May 8-11, 2018 SY 2017-2018',
  startDate: Date.parse('May 8, 2018'),
  endDate: Date.parse('May 11, 2018'),
  type: 'WHEN',
  message: 'The final examinations of the 2nd semester will be May on 8 to 11 SY 2017-2018. Goodluck!',
  tags: ['Final', 'Examinations', 'Exams', 'SY1718', '2nd', 'second', 'semester'],
  active: false
}, {
  name: 'Semestral Break 2nd Sem SY 2017-2018',
  details: 'Sem Break, May 14, 2018 - Jun 4, 2018 SY 2017-2018',
  startDate: Date.parse('May 14, 2018'),
  endDate: Date.parse('Jun 4, 2018'),
  type: 'WHEN',
  message: 'The Semestral Break for the 2nd semester will be on May 14, 2018 until June 4, 2018 SY 2017-2018. Enjoy!',
  tags: ['Semestral', 'Break', 'SY1718', '2nd', 'second', 'semester'],
  active: false
}, {
  name: 'UB Foundation Day',
  details: 'August 8, 1948',
  startDate: Date.parse('Aug 8, 1948'),
  endDate: Date.parse('Aug 8, 1948'),
  type: 'WHEN',
  message: 'On August 8, 1948, a school named Baguio Technical and Commercial Institute was born.',
  tags: ['University', 'Baguio', 'Born', 'Foundation', 'Establish', 'Day', 'Technical', 'Tech', 'Commercial', 'Institute'],
  active: false
}];

exports.event = event;
