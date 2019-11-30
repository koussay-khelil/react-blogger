const express = require('express');
const PORT = process.env.PORT || 4000;
const CONNECTION_URI = "your server here";
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const blogRoutes = express.Router();
let Blog = require('./database/models/Blog');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
blogRoutes.route('/').get(function(req, res) {
    Blog.find(function(err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.json(blogs);
        }
    });
});
blogRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Blog.findById(id, function(err, blog) {
        res.json(blog);
    });
});
blogRoutes.route('/update/:id').post(function(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        if (!blog)
            res.status(404).send("data is not found");
        else
            blog.blog_title = req.body.blog_title;
            blog.blog_content = req.body.blog_content;
            blog.blog_author = req.body.blog_author;
            blog.blog_image = req.body.blog_image;
            ;
            blog.save().then(blog => {
                res.json('Blog updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
blogRoutes.route('/add').post(function(req, res) {
    let blog = new Blog(req.body);
    blog.save()
        .then(blog => {
            res.status(200).json({'blog': 'blog added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new blog failed');
        });
});
app.use('/blogs', blogRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});