var express = require('express');
var router = express.Router();

const exclusionController = require('../controllers').exclusion_controller;

router.get('/', function(req, res){  
    console.log(req.query);
    exclusionController.getExclusion(req, res);
})

module.exports = router;
