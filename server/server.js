const mongoURI = require("./Config.js").mongoURI;
console.log(mongoURI);

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/jobs", require("./routes/jobs"));

const db = require("/keys").mongoURI;
const mongoose = require("mongoose");
mongoose
  .connect(db, { useNewurlPraser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log("error"));
