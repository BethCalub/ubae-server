/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/informations              ->  index
 * POST    /api/informations              ->  create
 * GET     /api/informations/:id          ->  show
 * PUT     /api/informations/:id          ->  upsert
 * PATCH   /api/informations/:id          ->  patch
 * DELETE  /api/informations/:id          ->  destroy
 */

'use strict';

// import jsonpatch from 'fast-json-patch';
import Information from './information.model';
import UbaeNLP from '../ubae/nlp/nlp.stopper';
import UbaeUtility from '../ubae/nlp/nlp.utility';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

// function patchUpdates(patches) {
//   return function(entity) {
//     try {
//       // eslint-disable-next-line prefer-reflect
//       jsonpatch.apply(entity, patches, /*validate*/ true);
//     } catch(err) {
//       return Promise.reject(err);
//     }

//     return entity.save();
//   };
// }

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

// Gets a list of Informations
export function index(req, res) {
  var filter = {};
  if(req.query.type) {
    filter = {
      type: req.query.type
    };
  }
  return Information.find(filter).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Information from the DB
export function show(req, res) {
  return Information.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Information in the DB
export function create(req, res) {
  var searchName = new RegExp('^' + req.body.name + '$', "i");
  console.log(searchName);
  Information.find({
    name: searchName,
    type: req.body.type,
    active: true
  }).exec(function(err, data) {
    console.log(data.length);
    if(data.length < 1) {
      return Information.create({
        name: req.body.name,
        type: req.body.type,
        details: req.body.details,
        message: req.body.message,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        created: {
          author: req.body.author,
          date: new Date(Date.now())
        },
        tags: UbaeNLP.keywordSearch(JSON.stringify(req.body.tags))
      })
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
    } else {
      res.status(401).send(err);
    }
  });
}

// Upserts the given Information in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Information.findOneAndUpdate({_id: req.params.id},
    req.body,
    {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Upserts the given Information in the DB at the specified ID
export function patch(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Information.findOneAndUpdate({_id: req.params.id},
    {
      name: req.body.name,
      details: req.body.details,
      message: req.body.message,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      modified: {
        author: req.body.author,
        date: new Date(Date.now())
      },
      tags: UbaeNLP.keywordSearch(JSON.stringify(req.body.tags))
    },
    {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Information in the DB
// export function patch(req, res) {
//   if(req.body._id) {
//     Reflect.deleteProperty(req.body, '_id');
//   }
//   return Information.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(patchUpdates(req.body))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// Deletes a Information from the DB
export function destroy(req, res) {
  return Information.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
