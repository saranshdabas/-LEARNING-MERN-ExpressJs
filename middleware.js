//A middleware sits between the req and res cycle like a interceptor
//It can intercept and incoming req and outgoing res and add something to it
//They are used for request validations and check if the user is authorized to access something

var express = require("express");
var app = express();
const port = 3000;

var addTimeStamp = (req, res, next) => {
  req.requestTimeStamp = Date.now();
  next();
};

//Use addTimeStamp as middleware globally for all APIs defined
app.use(addTimeStamp);

app.get("/", (req, res) => {
  res.send(`Request came at: ${req.requestTimeStamp}`);
});

var justAnotherLogger = (req, res, next) => {
  console.log("Nothing special!...");
  next();
};

//Different validator for a different API
app.get("/users", justAnotherLogger, (req, res) => {
  console.log(req.requestTimeStamp); //First local middleware is called, then global
  res.send(`Request came at: ${req.requestTimeStamp}`);
});

app.listen(port);
