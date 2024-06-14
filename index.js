// Importing dependencies
const path = require("path");
const express = require("express");

const codeQuest = express();

// express body parser set up
codeQuest.use(express.urlencoded({ extended: true }));

// directories to access
codeQuest.set("views", path.join(__dirname, "views"));
codeQuest.use(express.static(__dirname + "/public"));
codeQuest.set("view engine", "ejs");

// Home page GET method
codeQuest.get("/", (req, res) => {
  res.render("home");
});











const port = 9090;
codeQuest.listen(port, () => {
  console.log(`CodeQuest is running at http://localhost:${port}/`);
});
