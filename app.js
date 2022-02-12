//require all the needed modules & libraries
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

// Load method categories for Lodash
var array = require('lodash/array');
var object = require('lodash/fp/object');

const homeStartingContent = "Save Smart, Dream Big";
const aboutContent = "Who We Are";
const contactContent = "How To Reach Us";

//get express server to work
const app = express();

//get the templates to work
app.set('view engine', 'ejs');


//use body parser and render css files
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//create an array to store all the posts we create
const posts = [];


//serve our app homepage and the starting content
app.get("/", function(req, res) {
  res.render(__dirname + "/views/home.ejs", {
    homeContent: homeStartingContent, 
    newPosts: posts
  });

})

//serve up the about page
app.get("/about", function(req, res) {
  res.render(__dirname + "/views/about.ejs", {aboutPageContent: aboutContent});
})

//serve up the contact us page
app.get("/contact", function(req, res) {
  res.render(__dirname + "/views/contact.ejs", {contactPageContent: contactContent});
})

//serve up the compose page for publishing new entries
app.get('/compose', function(req, res) {
  res.render(__dirname + "/views/compose.ejs");
})

//post the blog's title and content
app.post('/', function(req, res) {
  //create js object to show both of these things at the same time. 
  const post = {
      title: req.body.newTitle,
      content: req.body.newContent
  }
  //add every object created to the posts array
  posts.push(post);
  res.redirect('/')
})

//serve up one specific blog post through routing
app.get('/posts/:postName', function(req, res) {
  let specificPost = req.params.postName;

  posts.forEach(function(post) {
    storedTitle = post.title

    if (specificPost === storedTitle) {
      console.log('Match found');
    } else {
      console.log('Match NOT found')
    }
  })

})

//Set up server and make sure it is listening
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
