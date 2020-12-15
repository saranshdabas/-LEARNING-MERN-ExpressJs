//Express JS is a light weight library which helps in network operations
//like creating and handling of server, API requests etc.

//expres() runs the index.js file of express module
const express = require("express");
const app = express();
const port = 3000;

//Root directory API
app.get("/", (req, res) => {
  res.send("Hello world! Express is awesome...");
});

// /users API
app.get("/users", (req, res) => {
  res.send({ Names: "Saransh, Pranjal, Rahul" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
