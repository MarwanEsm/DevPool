const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  // img: {
  //   data: Buffer,
  //   contentType: String,
  // },
  img: { type: String, required: false },
  fullName: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  workExperience: { type: Array, required: true },
  desiredPosition: String,
  expectedSalary: Number,
  email: { type: String, required: true }
});

module.exports = mongoose.model("candidate", CandidateSchema);
