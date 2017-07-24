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
import ubaeAI from './ubae.logic.js';

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

export function use(req, res) {
  try {
    var userInput = req.query.i;
    var ubae = ubaeAI.getQuery(userInput);
    console.log(ubae.commands);
    if(ubae.commands !== undefined) {
      console.log(ubae.keywords);
      if(ubae.keywords.length > 0) {
        var keyRegex = new RegExp(ubae.keywords.join('|'), 'i');
        Dept.findOne({ tags: { $all: [keyRegex] } })
          .exec(function(err, story) {
            if(err) return handleError(err);
            if(story !== null) {
              return res.send({
                in: userInput,
                cmd: ubae.commands,
                tags: ubae.keywords,
                result: ubaeAI.results(story, ubae.commands)
              });
            } else {
              return res.send(ubaeAI.errResults(
                'Sorry but I can\'t seem to find anything related'
              ));
            }
          });
      } else {
        return res.send(ubaeAI.errResults(
          'Please be more specific'
        ));
      }
    } else {
      // Add an exception flow.
      return res.send(ubaeAI.errResults(
        'I don\'t know what you want to find. ' +
        'Please start your question with WHAT, WHERE, HOW, or WHICH'
      ));
    }
  } catch(err) {
    return res.send(ubaeAI.errResults(
      'Please type in a question.'
    ));
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
