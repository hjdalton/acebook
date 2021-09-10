var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    unique: false 
  },
  lastname: {
    type: String,
    required: true,
    unique: false 
  },
  username: {
    type: String,
    required: true,
    unique: true 
  },
  email: {
    type: String,
    required: true,
    unique: false 
  },
  password: {
    type: String,
    required: true,
    unique: false 
  }
});

// UserSchema.plugin(uniqueValidator);


var User = mongoose.model('User', UserSchema);

module.exports = User;