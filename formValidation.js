//Using express-validator library for validation of inputs
const { check, validationResult, matchedData } = require("express-validator");
var express = require("express");
var app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use("/abc", express.static(path.join(__dirname, "public")));
app.set("view engine", "twig");
app.set("views", "./public/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("login");
});

//check is used to bind fields(parser is a pre requisite) with error message and checking fn
//checking fn can be like isEmail or a custom one
//validationResult() gives the result after executing those checks and .mapped() binds them to fields
//matchedData() is binded data to access username, password etc in one object.
app.post(
  "/",
  [
    check("username", "Username should be email").isEmail(),
    check("password", "Min length should be 5").isLength({ min: 5 }),
    check("cpassword", "Confirm password doesn't match").custom(
      (value, { req }) => {
        if (value != req.body.password) {
          throw new Error("Password and confirm password do not match");
        } else {
          return true;
        }
      }
    ),
  ],
  (req, res) => {
    const error = validationResult(req);
    const data = matchedData(req);
    if (!error.isEmpty()) {
      res.render("login", { err: error.mapped(), user: data });
    } else {
      res.render("welcome", { user: data });
    }
  }
);

app.listen(port);
