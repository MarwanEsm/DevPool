const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new mongoose.Schema({
  img: { type: String, required: false },
  fullName: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  workExperiences: { type: Array, required: true },
  desiredPosition: String,
  expectedSalary: Number,
  email: { type: String, required: true,  unique:true },
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  website: String,
  github: String,
  instagram: String,
  facebook: String,
  twitter: String,
  city: String,
  phoneNo: Number,
  hobbies: String,
  address: String,
  languages: String,
  skills :String,
  education:String,
});

module.exports = mongoose.model("candidate", CandidateSchema);
