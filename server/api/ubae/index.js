'use strict';

var express = require('express');
var controller = require('./ubae.controller');

var router = express.Router();

router.get('/use', controller.use);

module.exports = router;
