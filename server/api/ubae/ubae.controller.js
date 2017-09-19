/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/ubae/use?i=              ->  inquiry
 */

'use strict';

import UbaeNLP from './ubae.nlp';
import UbaeSearch from './ubae.use';
import messages from '../../config/data/message.ubae';

// UBAE SEARCH ENGINE
export function use(req, res) {
  var userInput = req.query.i;
  if(userInput) {
    var ubae = UbaeNLP.getQuery(userInput);
    if(!ubae.help) {
      if(ubae.keywords.length >= 0) {
        switch (ubae.command) {
        case 'what':
          return UbaeSearch.searchWhat(req, res, userInput, ubae);
        case 'when':
          return UbaeSearch.searchWhen(req, res, userInput, ubae);
        case 'where':
          return UbaeSearch.searchWhere(req, res, userInput, ubae);
        case 'how':
          return UbaeSearch.searchHow(req, res, userInput, ubae);
        case 'which':
          return UbaeSearch.searchWhich(req, res, userInput, ubae);
        default:
          return UbaeSearch.searchResponse(req, res, userInput, ubae);
        }
      } else {
        return res.send({
          result: {
            _say: messages.noResult.noKeyword,
            _t: Date.now()
          }
        });
      }
    } else {
      return UbaeSearch.searchHelp(req, res, userInput, ubae);
    }
  } else {
    return res.send({
      result: {
        _say: messages.noResult.noInquiry,
        _t: Date.now()
      }
    });
  }
}

// NATURAL LANGUAGE PROCESSING
export function nlp(req, res) {
  var userInput = req.query.i;
  if(userInput) {
    var ubae = UbaeNLP.getQuery(userInput);
    return res.send({
      input: ubae._in,
      command: ubae.command,
      classifier: ubae.classifier,
      tags: ubae.keywords,
      stemmed: ubae.stemmed.toString().split(','),
      porter: ubae.porter.toString().split(','),
      lancaster: ubae.lancaster.toString().split(','),
      regex: ubae.regex.toString(),
      help: ubae.help
    });
  } else {
    return res.send({
      result: {
        _say: 'Sorry! I cannot search anything from an empty inquiry. Please try again. :)',
        _t: Date.now()
      }
    });
  }
}
