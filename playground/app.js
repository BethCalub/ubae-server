'use strict';
const readline = require('readline');
const userEntry = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const commandList = ['WHERE', 'HOW', 'WHAT', 'WHICH'];
const typeList = ['OFFICE', 'DEPARTMENT', 'SCHOOL', 'DEPT'];
const programList = ['SERVICE', 'COURSE', 'PROGRAM'];

function wordSearch(input, list) {
  input = input.toUpperCase()
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .split(' ');
  for (var y = 0; y < list.length; y++) {
    var cur = list[y];
    for (var x = 0; x < input.length; x++) {
      var currentUserInput = input[x];
      if (cur === currentUserInput) {
        return cur.toLowerCase();
      }
    }
  }
}

function ubaeSearch(req, res) {
  console.log(req);
  return req;
}

userEntry.question('Type a question: ', answer => {

  if (answer) { //null
    console.log('Null Validation Passed');
    if (answer) { //keywords
      console.log('Keyword Validation Passed');
      if (wordSearch(answer, commandList)) { //command
        console.log('Command Validation Passed');

        if (wordSearch(answer, typeList)) { //modifier
          console.log('With Modifier');
          ubaeSearch('Passed');

        } else {
          console.log('No Modifier');
          ubaeSearch('Passed');
        }

      } else {
        console.log('Command Validation Failed');
      }
    } else {
      console.log('Keyword Validation Failed');
    }
  } else {
    console.log('Null Validation Failed');
  }

  userEntry.close();
});
