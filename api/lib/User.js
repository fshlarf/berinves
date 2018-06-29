var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    title: {
        type: String
    },
    idea: {
        type: String
    },
});

var User = mongoose.model('myusers', userSchema);
module.exports = User;