var Post = require('../models/post');
var session;

var PostsController = {
  Index: function(req, res) {
    session = req.session

    if(session.userid){
      Post.find({}, function(err, posts) {
        if (err) { throw err; }

        res.render('posts/index', { posts: posts });
      }).sort({ 'created_on': -1 });
    }else {
      res.render('home/login_error.hbs')
    }
      

  },
  New: function(req, res) {
    session = req.session

    if(session.userid){
      res.render('posts/new');
      }else {
      res.render('home/login_error.hbs')
    } 
  },
  Create: function(req, res) {
    if(session.userid){
      var post = new Post(req.body);
      post.save(function(err) {
        if (err) { throw err; }

        res.status(201).redirect('/posts');
      });
    }else {
      res.render('home/login_error.hbs')
    }   
  },
  
  Remove: function(req, res) {
    console.log(req.body.id)
    // var post = new Post(req.body);
    Post.findByIdAndRemove({ _id: req.body.id }, function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/posts');
    });
  },

  Like: function(req, res) {
    console.log(req.body.id)
    Post.findByIdAndUpdate({ _id: req.body.id },{$inc:{ likes: 1 }},function(err) {
        if (err) { throw err;} 

        res.status(201).redirect('/posts');
      }); 
  },

  Comment: function(req, res) {
    session = req.session

    if(session.userid){
      res.render('posts/comments');
    } else {
      res.render('home/login_error.hbs')
    } 
  }
};


module.exports = PostsController;