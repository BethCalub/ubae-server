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
  event: 'Attire: International, Registration Fee: P200, Location: UB Cardinals Gym, 8:00am-5:00pm',
  startDate: Date.parse('Sept 17, 2017'),
  endDate: Date.parse('Sept 17, 2017'),
  type: '',
  message: 'Grand Alumni Homecoming and General Assembly will be held on the 17th of September 2017 at the UB Cardinals Gym. The event would start at 8:00am until 5:00pm. Please take note that you should be in your International attire and that there is a P200 registration fee.',
  tags: ['UBAFI', 'Grand', 'Alumni', 'Homecoming', 'General', 'Assembly'],
}];

exports.event = event;
