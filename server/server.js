const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoURI = require("./Config.js").mongoURI;



// init express app
const app = express();
const port = process.env.PORT || 5000;

// conect to mongodb
mongoose
  .connect(mongoURI, { useNewurlPraser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

// middlewares
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/candidate", require("./routes/candidate"));
app.use('/user', require ('./routes/user'));
app.use('/auth', require('./routes/auth'));
app.use('/employer', require('./routes/employer'));

// run app and listen to requests on port 5000
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});
