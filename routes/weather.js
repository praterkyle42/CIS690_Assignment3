var express = require('express');
var router = express.Router();
const weatherController = require('../controllers/weatherController');
/* GET users listing. */
router.get('/', weatherController.get_weather);


module.exports = router;
