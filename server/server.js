const mongoURI = require("./Config.js").mongoURI;
console.log(mongoURI);

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});
