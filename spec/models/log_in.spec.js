var mongoose = require('mongoose');

require('../mongodb_helper')
//require passport package
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


  it('throws an error for incorrect user credentials', function() {

  });
});