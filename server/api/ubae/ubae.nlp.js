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
    classifier: 'Unavailable',
    keywords: stopper.keywordSearch(input),
    stemmed: stemmer.toRegexArrayStemmed(input),
    help: linear.helpSearch(input),
  };
};
