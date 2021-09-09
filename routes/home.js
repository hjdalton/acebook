var express = require('express');
var router = express.Router();

var HomeController = require('../controllers/home');

router.get('/', HomeController.Index);
router.post('/', HomeController.New);
router.get('/login', HomeController.Signin);
router.post('/login', HomeController.Login);
router.get('/logout', HomeController.Logout)

module.exports = router;
