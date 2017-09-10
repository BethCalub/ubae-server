import natural from 'natural';
import cls from './classifiers.js';

var classifier = new natural.BayesClassifier();

exports.initClassifier = function() {
  cls.classifiers.forEach(function(element) {
    classifier.addDocument(element.text, element.tag);
    console.log('training ' + element.text);
  }, this);
  classifier.train();
  console.log('classifiers succesfully trained');
  classifier.save('classifier.json', function(err, classifier) {
    if(err) throw err;
    console.log('classifier successfully saved');
  });
};

exports.addClassifier = function(text, tag) {
  classifier.addDocument(text, tag);
  console.log('training ' + text);
  classifier.train();
  classifier.save('classifier.json', function(err, classifier) {
    if(err) throw err;
    console.log('classifier successfully saved');
  });
};

exports.saveClassifier = function() {
  classifier.save('./server/server/api/ubae/bayes/classifier.json', function(err, classifier) {
    if(err) throw err;
    console.log('classifier successfully saved');
  });
};

// exports.loadClassifier = function(input) {
//   natural.BayesClassifier.load('./server/server/api/ubae/bayes/classifier.json', null, function(err, classifier) {
//     if(err) throw err;
//     // console.log(classifier.classify(input));
//     // console.log('classifiers loaded');
//     var x = classifier.classify(input);

//     setResult(x);
//     classifier.classify(input);
//   });
//   console.log(getResult());
//   return getResult();
// };
