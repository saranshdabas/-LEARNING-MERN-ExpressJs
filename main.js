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

//---------------Static files-------------------
//https://expressjs.com/en/starter/static-files.html

//We need to specify the path of static file so that node js can include that and compile in html
// /abc is the virtual path to secure our app so that no one knows the actual path in inspect etc.
app.use("/abc", express.static(path.join(__dirname, "public")));

// /meme API
app.get("/meme", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
