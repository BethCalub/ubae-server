'use strict';

import mod from './nlp/dictionary/modifiers.js';
import linear from './nlp/nlp.linear';
import stemmer from './nlp/nlp.stemmer';
import stopper from './nlp/nlp.stopper';

exports.getKeywords = function(input) {
  return stemmer.keywordSearch(input);
};

exports.getQuery = function(input) {
  return {
    _in: input,
    command: linear.commandSearch(input, mod.commandList),
    classifier: 'unavailable',
    keywords: stopper.keywordSearch(input),
    stemmed: stemmer.toRegexArray(stopper.keywordSearch(input)),
    porter: stemmer.toRegexArrayStemmed(input),
    lancaster: stemmer.toRegexArrayLStemmed(input),
    regex: new RegExp('^' + stopper.keywordSearch(input).join('|^'), 'i'),
    help: linear.helpSearch(input),
    helpCmd: linear.listSearch(input, mod.commandList)
  };
};
