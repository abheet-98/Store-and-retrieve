const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aaSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Number: {
        type: Number,
        required: true
    },
    Course: {
        type: String,
        required: true
    },
    Country: {
        type: [String],
        required : true
    },
    Date: {
        type: Date
    }
});

module.exports = mongoose.model('aaSchema',aaSchema);
