//require all the needed modules & libraries
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

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
  })
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

//serve up one specific blog post through routing and used lodash to convert to lower case
app.get('/posts/:postName', function(req, res) {
  let specificTitle = _.lowerCase(req.params.postName);

  posts.forEach(function(post) {
    const storedTitle = _.lowerCase(post.title)

    if (specificTitle === storedTitle) {
     //render the specific blog post routed to
    res.render(__dirname + "/views/post.ejs", {
      postName: post.title, 
      postContent: post.content});
    }   
  })
})

// //serve up a blog post when the 'Read more' link is clicked
// link: '<a href="/posts/:postName">Read More</a>'

//Set up server and make sure it is listening
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
