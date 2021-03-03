const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: String,
  salary: Number,
  description: String,
});

module.exports = mongoose.model("job", JobSchema);
