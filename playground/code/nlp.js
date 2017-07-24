'user strict';

var natural = require('natural');
var wordnet = new natural.WordNet();

const readline = require('readline');
const userEntry = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


userEntry.question('Type a question: ', answer => {

  var metaphone = natural.Metaphone;
  var soundEx = natural.SoundEx;

  var wordA = answer;
  var wordB = 'where';

  if (metaphone.compare(wordA, wordB))
    console.log('they sound alike!');
  //   wordnet.lookup(answer, function (results) {
  //   console.log(results.length);
  //   results.forEach(function (result) {
  //     console.log(result);
  //     // console.log(result.log);
  //     // console.log(result.synsetOffset);
  //     // console.log(result.pos);
  //     // console.log(result.lemma);
  //     console.log(result.synonyms);
  //     // console.log(result.pos);
  //     // console.log(result.gloss);
  //   });
  // });

  natural.PorterStemmer.attach();
  console.log(answer.tokenizeAndStem());
  console.log('chainsaws'.stem());

  userEntry.close();
});


// var corpus = ['something', 'soothing'];
// var spellcheck = new natural.Spellcheck(corpus);
// console.log (spellcheck);

// ['something']
// console.log(spellcheck.getCorrections('soething', 1))
