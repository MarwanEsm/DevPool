const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  workExpereince: { type: Array, required: true },
  desiredPosition: String,
  expectedSalary: Number,
});

module.exports = mongoose.model("candidate", CandidateSchema);
