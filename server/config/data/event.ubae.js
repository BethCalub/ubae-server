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
}];

exports.event = event;
