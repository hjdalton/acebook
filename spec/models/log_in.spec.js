var mongoose = require('mongoose');

require('../mongodb_helper')
var User = require('../../models/users');

describe('Log in', function () {
  beforeEach(function(done) {
    mongoose.connection.collections.comments.drop(function() {
        done();
    });
  });


  it('does something', function() {

  });
});