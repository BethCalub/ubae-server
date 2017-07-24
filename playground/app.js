'use strict';

// import natural from 'natural';

const commandList = ['WHERE', 'HOW', 'WHAT', 'WHICH'];
const typeList = ['OFFICE', 'DEPARTMENT', 'SCHOOL', 'DEPT'];

function wordSearch(input, list) {
  input = input.toUpperCase()
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .split(' ');
  for(var y = 0; y < list.length; y++) {
    var cur = list[y];
    for(var x = 0; x < input.length; x++) {
      var currentUserInput = input[x];
      if(cur === currentUserInput) {
        return cur.toLowerCase();
      }
    }
  }
}

wordSearch('Where can i find the school of information technology?', commandList);
