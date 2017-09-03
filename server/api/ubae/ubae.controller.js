/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/ubae/use?i=              ->  inquiry
 */

'use strict';

import UbaeNLP from './ubae.nlp';
import UbaeSearch from './ubae.search';

// Get results from UBAE
export function use(req, res) {
  var userInput = req.query.i;
  if(userInput) {
    var ubae = UbaeNLP.getQuery(userInput);
    if(ubae.keywords.length > 0) {
      switch (ubae.command) {
      // case 'what':
      //   return UbaeSearch.searchWhat(req, res, userInput, ubae);
      // case 'when':
      //   return UbaeSearch.searchWhen(req, res, userInput, ubae);
      // case 'where':
      //   return UbaeSearch.searchWhere(req, res, userInput, ubae);
      // case 'how':
      //   return UbaeSearch.searchHow(req, res, userInput, ubae);
      case 'help':
        return UbaeSearch.searchHelp(req, res, userInput, ubae);
      default:
        return UbaeSearch.searchResponse(req, res, userInput, ubae);
      }
    } else {
      return res.send({
        result: {
          _say: 'Sorry! \nBut I cannot find any keywords on your inquiry. Please try again. :)',
          _t: Date.now()
        }
      });
    }
  } else {
    return res.send({
      result: {
        _say: 'Sorry! \nBut I cannot search anything from an empty inquiry. Please try again. :)',
        _t: Date.now()
      }
    });
  }
}

export function nlp(req, res) {
  var userInput = req.query.i;
  if(userInput) {
    var ubae = UbaeNLP.getQuery(userInput);
    console.log(ubae.regex);
    console.log(ubae.regexLine);
    console.log(ubae.stemmed);
    return res.send({
      keywords: ubae.keywords,
      command: ubae.command,
      modifiers: ubae.modifiers,
      classifier: ubae.classify,
    });
  } else {
    return res.send({
      result: {
        _say: 'Sorry! \nBut I cannot search anything from an empty inquiry. Please try again. :)',
        _t: Date.now()
      }
    });
  }
}
