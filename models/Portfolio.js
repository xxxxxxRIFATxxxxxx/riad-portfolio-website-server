// Dependencies
const mongoose = require('mongoose');

// Schema
const portfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 255,
        trim: true
    },

    category: {
        type: String,
        maxlength: 255,
        trim: true
    },

    type: {
        type: String,
        maxlength: 255,
        trim: true
    },

    source: {
        type: String,
        maxlength: 255,
        trim: true
    },

    serial: {
        type: Number,
        default: 0,
        trim: true
    },
},

    {
        timestamps: true
    }
);

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Export
module.exports = Portfolio;