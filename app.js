//require all the needed modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

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
})

//post the typed entry
app.post('/', function(req, res) {
  let title = req.body.newTitle;
  console.log(entry);
})


//Set up server and make sure it is listening
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
