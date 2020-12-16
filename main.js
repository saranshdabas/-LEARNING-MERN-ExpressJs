//Express JS is a light weight library which helps in network operations
//like creating and handling of server, API requests etc.

//expres() runs the index.js file of express module
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

//Root directory API
app.get("/", (req, res) => {
  res.send("Hello world! Express is awesome...");
});

// /users API
app.get("/users", (req, res) => {
  res.send({ Names: "Saransh, Pranjal, Rahul" });
});

// /employee API with optional parameter
app.get("/employees/:id?", (req, res) => {
  if (req.params.id) res.send(`Employee with id: ${req.params.id} is selected`);
  else res.send("All employees selected");
});

// /employee API with 2 optional separated parameters
app.get("/employees/:id?/book/:id2?", (req, res) => {
  res.send(
    `Employee with id: ${req.params.id} and bookId ${req.params.id2} is selected`
  );
});

// /flights API with two optional side by side parameter (can use - in place of . but optional ? doesn't work)
app.get("/flights/:from?.:to?", (req, res) => {
  res.send(`Flights from ${req.params.from} to ${req.params.to} are selected`);
});

//---------------Static files-------------------
//https://expressjs.com/en/starter/static-files.html

//We need to specify the path of static file so that node js can include that and compile in html
// /abc is the virtual path to secure our app so that no one knows the actual path in inspect etc.
app.use("/abc", express.static(path.join(__dirname, "public")));

// /meme API
app.get("/meme", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
