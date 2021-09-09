var User = require('../models/users');
var session;

var HomeController = {
  Index: function(req, res) {
    res.render('home/index', { title: 'Acebook' });
  },

  New: function(req, res) {
    var user = new User( { firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, email: req.body.email, password: req.body.password});
      
    User.exists({ username: req.body.username }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
          if (result=== false) {
            user.save(function(err) {
              if (err) { throw err; }
        
              res.status(201).redirect('/posts');
            });  
          } else {
              res.status(201).redirect('/')
          }
      }
    });
  },

  Signin: function(req, res) {
    res.render('home/login', { title: 'Acebook' });
  },

  Login: function(req, res) {
    User.exists({ username: req.body.username, password: req.body.password }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
          if (result=== true) {
            session=req.session;
            session.userid=req.body.username;
            console.log(req.session);
            res.status(201).redirect('/posts');
          } else {
            res.status(201).redirect('/login');
          }
      }
    });
  },

  Logout: function(req, res) {
    req.session.destroy();
    res.redirect('/');
  }
};

module.exports = HomeController;
