var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    idea: String,
});

var User = mongoose.model('myusers', userSchema);
module.exports = User;