var express = require('express');
var router = express.Router();
 
var exclusion_route = require('./exclusion');
router.use('/exclusion', exclusion_route);
 
//API start
router.get('/', function(req, res) {
  res.status(200).send({
    message: 'Bienvenido al API de su Microservicio',
  });
});
 
module.exports = router;