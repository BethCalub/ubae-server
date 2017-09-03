'use strict';

var express = require('express');
var controller = require('./ubae.controller');

var router = express.Router();

router.get('/use', controller.use);
router.get('/nlp', controller.nlp);

module.exports = router;
