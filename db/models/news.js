const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    text: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('News', schema);
