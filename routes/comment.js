var express = require('express');
var router = express.Router();

var CommentController = require('../controllers/comments')

router.post('/', CommentController.New);
router.get('/all', CommentController.Index);
router.post('/delete', CommentController.Remove);

module.exports = router;