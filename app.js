require("dotenv").config();
const express = require("express");
var hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// handlebar (template engine)
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

app.get("/", (req, res) => {
  res.render("home", {
    name: "Marvin Carrasco",
    title: "Curso de Node JS",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Marvin Carrasco",
    title: "Curso de Node JS",
    class: "alt",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Marvin Carrasco",
    title: "Curso de Node JS",
    class: "alt",
  });
});

// middleware: servir los assets
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
