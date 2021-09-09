var mongoose = require('mongoose');
require('../mongodb_helper')
var User = require('../../models/users');

describe('Sign up', function() {
  beforeEach(function(done) {
    mongoose.connection.collections.users.drop(function() {
    });

    var user = new User({  firstname: 'Jim', lastname: 'Smith', username: 'jimmyboi', email: 'email@test.com', password: '1234' }); 

    user.save(function(err) {
      expect(err).toBeNull();

      done();
    });
  });

  it('saves a user', function(done) {
      User.find(function(err, user) {
        expect(err).toBeNull();

        expect(user[0]).toMatchObject({ firstname: 'Jim', lastname: 'Smith', username: 'jimmyboi', email: 'email@test.com', password: '1234' });
        done();
      });
  });

  it('doesnt save 2 users with the same username', function(done) {
    
    var user2 = new User({  firstname: 'Leslie', lastname: 'Smith', username: 'jimmyboi', email: 'email@test.com', password: '1234' });

    user2.save(function(err) {
      console.log(err)
      expect(err).toBe()
      done();

      // User.find(function(err, user2) {
      //   expect(err).toBeNull();
      //   done();
      // });
    });
  });



  
});

//want to throw an error if log in credentials are already taken