const mongoose = require('mongoose')


const villainSchema = mongoose.Schema({
    name: String,
    age: Number,
    universe: String,
    kills: Number,
});

module.exports = mongoose.model('villains', villainSchema);