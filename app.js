//require all the needed modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "This is the home content";
const aboutContent = "And this is the about content.";
const contactContent = "Here's the contact stuff";

//get express server to work
const app = express();

//get the templates to work
app.set('view engine', 'ejs');


//use body parser and render css files
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//serve our app homepage and the starting content
app.get("/", function(req, res) {
  res.render(__dirname + "/views/home.ejs", {homeContent: homeStartingContent});
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
  let newEntry = req.body;
  console.log(newEntry);
})


//Set up server and make sure it is listening
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
