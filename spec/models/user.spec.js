var mongoose = require('mongoose');

require('../mongodb_helper')
var User = require('../../models/users');

describe('User model', function() {
  beforeEach(function(done) {
    mongoose.connection.collections.users.drop(function() {
        done();
    });
});

  it('saves a user', function(done) {
    var user = new User({  firstname: 'Jim', lastname: 'Smith', username: 'jimmyboi', email: 'email@test.com', password: '1234' });

    user.save(function(err) {
      expect(err).toBeNull();

      User.find(function(err, user) {
        expect(err).toBeNull();

        expect(user[0]).toMatchObject({ firstname: 'Jim', lastname: 'Smith', username: 'jimmyboi', email: 'email@test.com', password: '1234' });
        done();
      });
    });
  });
});

//want to throw an error if log in credentials are already taken