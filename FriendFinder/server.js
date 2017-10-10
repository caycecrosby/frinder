var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');
var PORT = 3001;
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));




// Routes
// ===========================================================
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.post("/api/friendcheck", function(req, res){
  console.log(req.body)
});

app.post('/myFriends', (req,res)=>{
  console.log("test");
        res.json(friends)
})



// ________________________________________________________
//responds letting me know that server is listening.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// ________________________________________________________
