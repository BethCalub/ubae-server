'use strict';

// import Response from '../../response/response.model';
// import Feedback from '../../feedback/feedback.model';
// import Location from '../../location/location.model';

import whatModule from './use.what';
import whenModule from './use.when';
import whereModule from './use.where';
import howModule from './use.how';
import helpModule from './use.help';
import responseModule from './use.responses';

// function respondWithResult(res, statusCode) {
//   statusCode = statusCode || 200;
//   return function(entity) {
//     if(entity) {
//       return res.status(statusCode).json(entity);
//     }
//     return null;
//   };
// }

// function handleError(res, statusCode) {
//   statusCode = statusCode || 500;
//   return function(err) {
//     res.status(statusCode).send(err);
//   };
// }

// function createFeedback(_in, cmd, mod, tag, ubaeresponse = '') {
//   Feedback.create({
//     userinput: _in,
//     command: cmd,
//     modifier: mod,
//     keywords: tag,
//     response: ubaeresponse,
//     timestamp: Date.now()
//   })
//   .then(() => console.log('Successfully added feedback.'))
//   .catch(err => console.log('Failed adding feedback.', err));
// }

exports.searchWhat = whatModule.what;

exports.searchWhen = whenModule.when;

exports.searchWhere = whereModule.where;

exports.searchHow = howModule.how;

exports.searchHelp = helpModule.help;

exports.searchResponse = responseModule.response;
