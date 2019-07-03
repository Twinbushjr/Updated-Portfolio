const express = require("express");
const app = express();
const path = require("path");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});