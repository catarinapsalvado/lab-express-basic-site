const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  console.log("server reached");
  res.sendFile(__dirname + "/public/views/home.html");
});
app.get("/About", (req, res, next) => {
  console.log("server reached");
  res.sendFile(__dirname + "/public/views/About.html");
});
app.get("/awards", (req, res, next) => {
  console.log("server reached");
  res.sendFile(__dirname + "/public/views/awards.html");
});

app.get("/photo_gallery", (req, res, next) => {
    console.log("server reached");
    res.sendFile(__dirname + "/public/views/photo_gallery.html");
  });
app.listen(3000, () => console.log("Server running on port 3000"));
