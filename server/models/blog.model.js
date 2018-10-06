const mongoose = require('mongoose');

var Blog = mongoose.model('Blog', {
    title: { type: String },
    shortDescription: { type: String },
    category: { type: String },
    fullDescription: { type: String },
    editorValue: { type: String },
});

module.exports = { Blog };