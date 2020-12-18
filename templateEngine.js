var express = require("express");
const path = require("path");
var app = express();
const port = 3000;

//Setting static file path(optional)
app.use("/abc", express.static(path.join(__dirname, "public")));

//Setting view engine as pug (can use ejs and twig) -> we now don't need to specify extension(.pug) in render method
app.set("view engine", "pug");

//Setting views directory to directly access view files without full path
app.set("views", "./public/views");

app.get("/", (req, res) => {
  res.render("indexPug", {
    title: "Template Engine",
    heading: "Pug Engine",
    message: "Pug is awesome",
  });
});

app.listen(port);
