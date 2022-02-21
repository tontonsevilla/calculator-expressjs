const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function(e) {
  console.log(`Server started on ${port}.`);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post("/", function(req, res) {
  res.send('Thank you for posting.');
});
