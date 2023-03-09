const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    age: Number,
});

module.exports = mongoose.model('users', villainSchema);