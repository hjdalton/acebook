var mongoose = require('mongoose');
require('../mongodb_helper')
var User = require('../../models/users');

describe('Log in', function () {
  beforeEach(function(done) {
    mongoose.connection.collections.users.drop(function() {
    });

   var user = new User({  firstname: 'Jim', lastname: 'Smith', username: 'jimmyboi', email: 'email@test.com', password: '1234' }); 

   user.save(function(err) {
    expect(err).toBeNull();

    done();
    });
  });


  it('accepts a users credentials', function(done) {
    User.exists({ username: "jimmyboi", password:"1234"}, function(err, result) {
      console.log(result)
      expect(result).toBe(true)
      done();
    });
    
  });


  it('throws an error for incorrect username credentials', function(done) {
    User.exists({ username: "jimmyboy", password:"1234"}, function(err, result) {
      console.log(result)
      expect(result).toBe(false)
      done();
    });
  });

  it('throws an error for incorrect password credentials', function(done) {
    User.exists({ username: "jimmyboi", password:"1333"}, function(err, result) {
      console.log(result)
      expect(result).toBe(false)
      done();
    });
  });
});