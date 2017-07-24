'use strict';

var express = require('express');
var controller = require('./ubae.controller');

var router = express.Router();

router.get('/use', controller.use);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
