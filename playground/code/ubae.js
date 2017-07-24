'use strict';

const swd = require('./swd.js');
const readline = require('readline');
const userEntry = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removeExtraWords(sentence) {
  var word;
  var stopWord;
  var regexStr;
  var regex;
  var cleansedString = sentence;
  var stopWords = swd.sw();
  // Split out all the individual words in the phrase
  var words = cleansedString.match(/[^\s]+|\s+[^\s+]$/g);
  // Review all the words
  for(var wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
    // For each word, check all the stop words
    for(var stopWordIndex = 0; stopWordIndex < stopWords.length; stopWordIndex++) {
      // Get the current word
      word = words[wordsIndex].replace(/\s+|[^a-z]+/ig, ""); // Trim the word and remove non-alpha
      // Get the stop word
      stopWord = stopWords[stopWordIndex];
      // If the word matches the stop word, remove it from the keywords
      if(word.toLowerCase() === stopWord) {
        // Build the regex
        regexStr = "^\\s*" + stopWord + "\\s*$"; // Only word
        regexStr += "|^\\s*" + stopWord + "\\s+"; // First word
        regexStr += "|\\s+" + stopWord + "\\s*$"; // Last word
        regexStr += "|\\s+" + stopWord + "\\s+"; // Word somewhere in the middle
        regex = new RegExp(regexStr, "ig");
        // Remove the word from the keywords
        cleansedString = cleansedString.replace(regex, ' ');
      }
    }
  }
  console.log(`Proccessed Output ${cleansedString}`);
  return cleansedString.replace(/^\s+|\s+$/g, "");
}

//Remove Unecessary Puntuations
function preProcessedInput(userInput) {
  console.log(`Unprocessed String: ${userInput}`);
  userInput = userInput.toUpperCase();
  userInput = userInput.replace(/[^\w\s]|_/g, "");
  userInput = userInput.replace(/\s+/g, " ");
  // console.log(`Processed String: ${userInput}`);
  return userInput;
}

//Determine Command Type
function cmdType(proccessedInput) {
  proccessedInput = proccessedInput.split(' ');
  var matchCount = 0;
  const commandList = ['WHERE', 'HOW', 'WHAT', 'WHICH'];
  for(var commandIndex = 0; commandIndex < commandList.length; commandIndex++) {
    var currentCmd = commandList[commandIndex];
    for(var inputIndex = 0; inputIndex < proccessedInput.length; inputIndex++) {
      var currentUserInput = proccessedInput[inputIndex];
      if(currentCmd === currentUserInput) {
        console.log(`COMMAND MATCH FOUND: ${currentCmd}`);
        matchCount = matchCount + 1;
        // baeString[0] = cur_cmd;
        // proccessedInput.splice(inputIndex, 1);
      }
    }
  }
  if(matchCount > 1) {
    console.log(`Sorry but I'm confused. I can't answer multiple questions at this moment.`);
    matchCount = 0;
  } else if(matchCount === 1) {
    console.log(`This is a valid question.`);
    matchCount = 0;
  } else{
    console.log(`Sorry, but this is not a valid question.`);
    matchCount = 0;
  }
}

userEntry.question('Type a question: ', answer => {
  var ppr = preProcessedInput(answer);
  var stw = removeExtraWords(ppr);
  cmdType(stw);
  userEntry.close();
});
