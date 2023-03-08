const mongoose = require('mongoose')


const heroSchema = mongoose.Schema({
    name: String,
    age: Number,
    universe: String
});

module.exports = mongoose.model('heroes', heroSchema);