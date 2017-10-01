/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/instructions              ->  index
 * POST    /api/instructions              ->  create
 * GET     /api/instructions/:id          ->  show
 * PUT     /api/instructions/:id          ->  upsert
 * PATCH   /api/instructions/:id          ->  patch
 * DELETE  /api/instructions/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Instruction from './instruction.model';
import UbaeNLP from '../ubae/nlp/nlp.stopper';

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

// Gets a list of Instructions
export function index(req, res) {
  return Instruction.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Instruction from the DB
export function show(req, res) {
  return Instruction.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Instruction in the DB
export function create(req, res) {
  return Instruction.create({
    name: req.body.name,
    process: req.body.details,
    message: req.body.message,
    tags: UbaeNLP.keywordSearch(JSON.stringify(req.body.tags))
  })
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Instruction in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Instruction.findOneAndUpdate({_id: req.params.id},
    req.body,
    {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Upserts the given Instruction in the DB at the specified ID
export function patch(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Instruction.findOneAndUpdate({_id: req.params.id},
    {
      name: req.body.name,
      process: req.body.details,
      message: req.body.message,
      tags: UbaeNLP.keywordSearch(JSON.stringify(req.body.tags))
    },
    {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Instruction in the DB
// export function patch(req, res) {
//   if(req.body._id) {
//     Reflect.deleteProperty(req.body, '_id');
//   }
//   return Instruction.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(patchUpdates(req.body))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// Deletes a Instruction from the DB
export function destroy(req, res) {
  return Instruction.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
