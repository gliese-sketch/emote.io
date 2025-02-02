const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello");
});

server.listen("8000", () => {
  console.log("Server listening on port 8000");
});
