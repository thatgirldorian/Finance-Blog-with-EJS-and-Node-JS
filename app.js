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

//serve our app homepage
app.get("/", function(req, res) {
  res.render(__dirname + "/views/home.ejs", {content1: homeStartingContent, content2: aboutContent, content3: contactContent});
})











//Set up server and make sure it is listening
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
