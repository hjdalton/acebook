var Comment = require('../models/comment');

var CommentController = {
  Index: async function(req, res) {
    const comments = await Comment.find({}).sort({ 'created_on': -1 });                      
    res.render('posts/comments', { comments: comments });
  },
  New: function(req, res) {
    var comment = new Comment({ comment: req.body.comment });
    console.log('!bug fixing!')
    comment.save(function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/posts/comments/all');
    });
  },

  Remove: function(req, res) {
    console.log(req.body.id)

    Comment.findByIdAndRemove({ _id: req.body.id }, function(err) {
      if (err) { throw err; }

    res.status(201).redirect('/posts/comments/all');  
  });
}
};

module.exports = CommentController;