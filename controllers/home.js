var User = require('../models/users');

var HomeController = {
  Index: function(req, res) {
    res.render('home/index', { title: 'Acebook' });
  },

  New: function(req, res) {
    var user = new User( { firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, email: req.body.email, password: req.body.password});
    user.save(function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/posts');
    });
  },

  Signin: function(req, res) {
    res.render('home/login', { title: 'Acebook' });
  },

  Login: function(req, res) {
    var authenticate = User.authenticate();
    authenticate( {username: req.body.username , password: req.body.password}, function(err) {
      if (err) { throw err; }
  
      res.status(201).redirect('/posts');
    });
  }
};

module.exports = HomeController;
