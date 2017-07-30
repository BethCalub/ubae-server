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
  if(userInput) { //check if null
    var ubae = ubaeAI.getQuery(userInput);
    if(ubae.keywords.length > 0) { //check if there is keywords
      var keyRegex = new RegExp(ubae.keywords.join('|'), 'i');
      return Dept.findOne({
        department: 'SCHOOL OF BUSINESS ADMINISTRATION AND ACCOUNTANCY'
        // tags: {
        //   $all: [keyRegex]
        // }
      })
      .select('department location programs.name programs.years program.programType')
      // .populate({
      //   path: 'programs',
      //   match: { tags: 'BSCOE'}
      // })
      .exec()
      .then(respondWithResult(res))
      .catch(handleError(res));

      // Dept.findOne({
      //   tags: {
      //     $all: [keyRegex]
      //   }
      // }).exec(function(err, story) {
      //   if(err) return handleError(err);
      //   if(story !== null) {
      //     return res.send({
      //       in: userInput,
      //       cmd: ubae.commands,
      //       mod: ubae.modifiers,
      //       tags: ubae.keywords,
      //       location: story.location
      //     });
      //   } else {
      //     return res.send('No Result');
      //   }
      // });
    } else {
      return res.send('No Keywords');
      //No exception return error message.
      //Sorry, but I can't seem to find anything related.
    }
  } else {
    return res.send('No Input');
    //No exception return error message.
    //There is nothing to find. Can you please re-type your question?
  }
}

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
