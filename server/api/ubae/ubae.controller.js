/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/ubae              ->  index
 * POST    /api/ubae              ->  create
 * GET     /api/ubae/:id          ->  show
 * PUT     /api/ubae/:id          ->  upsert
 * PATCH   /api/ubae/:id          ->  patch
 * DELETE  /api/ubae/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Ubae from './ubae.model';
import Dept from '../dept/dept.model';
import ubaeAI from '../../components/nlp/nlp.js';
import ubaeView from './ubae.logic';
import Response from '../response/response.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      // eslint-disable-next-line prefer-reflect
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Get results from UBAE
export function use(req, res) {
  var userInput = req.query.i;
  if(userInput) {
    var ubae = ubaeAI.getQuery(userInput);
    if(ubae.keywords.length > 0) {
      var keyRegex = new RegExp(ubae.keywords.join('|'), 'i');
      return Response.findOne({
        tags: {
          $all: [keyRegex]
        }
      }).exec(function(err, story) {
        if(err) return handleError(err);
        if(story !== null) {
          return res.send({ in: userInput,
            cmd: ubae.commands,
            mod: ubae.modifiers,
            tags: ubae.keywords,
            result: {
              _say: story.message,
              _t: Date.now()
            }
          });
        } else {
          return res.send({ in: userInput,
            cmd: ubae.commands,
            mod: ubae.modifiers,
            tags: ubae.keywords,
            result: {
              _say: 'Sorry! but I can\'t find anything related',
              _t: Date.now()
            }
          });
        }
      });
    } else {
      return res.send({
        result: {
          _say: 'Sorry! I\'m on vacation at this moment. My engineers are working on my functionalities and they will put me back in service as soon as possible. Let\'s talk soon. Take care! :)',
          _t: Date.now()
        }
      });
    }
  } else {
    return res.send({
      result: {
        _say: 'Sorry! I\'m on vacation at this moment. My engineers are working on my functionalities and they will put me back in service as soon as possible. Let\'s talk soon. Take care! :)',
        _t: Date.now()
      }
    });
  }

 

  // var userInput = req.query.i;
  // if(userInput) { //check if null
  //   var ubae = ubaeAI.getQuery(userInput);
  //   if(ubae.keywords.length > 0) { //check if there is keywords
  //     // var keyRegex = new RegExp(ubae.keywords.join('|'), 'i');
  //     var keyArray = [];
  //     for(var a = 0; a < ubae.keywords.length; a++) {
  //       var element = ubae.keywords[a];
  //       Dept.find({
  //         tags: new RegExp(element, 'i')
  //       })
  //       .exec(function(err, results) {
  //         if(err) return handleError(err);
  //         var count = results.length;
  //         if(count > 0) {
  //           keyArray.push(new RegExp(element, 'i'));
  //         }
  //         console.log(count);
  //       });
  //     }

  //     console.log(keyArray);
  //     Dept.find({
  //       tags: {
  //         $all: keyArray
  //       }
  //     })
  //       .exec()
  //       .then(respondWithResult(res))
  //       .catch(handleError(res));

  //     // ubaeView.getResults(req, res, ubae, userInput, keyArray);
  //   } else {
  //     return res.send({
  //       ubae: {
  //         _say: 'Sorry, but I can\'t seem to find anything related.',
  //         _t: Date.now()
  //       }
  //     });
  //     //No exception return error message.
  //     //Sorry, but I can't seem to find anything related.
  //   }
  // } else {
  //   return res.send({
  //     ubae: {
  //       _say: 'There is nothing to find. Please re-type your question.',
  //       _t: Date.now()
  //     }
  //   });
  //   //No exception return error message.
  //   //There is nothing to find. Please re-type your question?
  // }
}

function getResults(req, res, ubae, userInput, keyArray) {

  // .exec(function(err, story) {
  //   if(err) return handleError(err);
  //   if(story !== null) {
  //     return res.send({
  //       in: userInput,
  //       cmd: ubae.commands,
  //       mod: ubae.modifiers,
  //       tags: ubae.keywords,
  //       ubae: getCommandResults(story, ubae.commands)
  //     });
  //   } else {
  //     return res.send('No Result');
  //   }
  // });
};
// Gets a list of Ubaes
export function index(req, res) {
  return Ubae.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Ubae from the DB
export function show(req, res) {
  return Ubae.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Ubae in the DB
export function create(req, res) {
  return Ubae.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Ubae in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Ubae.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Ubae in the DB
export function patch(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Ubae.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Ubae from the DB
export function destroy(req, res) {
  return Ubae.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
