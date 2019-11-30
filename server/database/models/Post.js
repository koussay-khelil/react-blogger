const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Blog = new Schema({
    blog_title: {
        type: String
    },
    blog_content: {
        type: String
    },
    blog_author: {
        type: String
    },
    blog_image: {
        type: String
    }
    
});
module.exports = mongoose.model('Blog', Blog);