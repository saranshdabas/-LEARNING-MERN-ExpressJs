//Data that comes in a request is in JSON format and url encoded
//We need a JSON and urlencoded parser
//body-parser is a middleware which creates body from the contents of url by parsing it
var express = require("express");
var app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use("/abc", express.static(path.join(__dirname, "public"))); //Not optional because we need css in login page
app.set("view engine", "twig");
app.set("views", "./public/views");

//JSON and urlencoded parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/", (req, res) => {
  console.log(req);
  res.send(
    `Username is ${req.body.username} and password is ${req.body.password}`
  );
});

app.listen(port);
