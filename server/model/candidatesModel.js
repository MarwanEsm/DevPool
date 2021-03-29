const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new mongoose.Schema({
  
  img: { type: String, required: false },
  fullName: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  workExperience: { type: Array, required: true },
  desiredPosition: String,
  expectedSalary: Number,
  email: { type: String, required: true },
  id:{ type: Schema.Types.ObjectId, ref: 'user' }
});

module.exports = mongoose.model("candidate", CandidateSchema);
