const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployerSchema = new mongoose.Schema({
  employerName: { type: String, required: true },
  website: { type: String, required: true },
  location: { type: String },
  fieldOfBusiness: { type: String, required: true },
  concernedPersonEmail: { type: String, required: true , unique:true},
  phoneNo: { type: Number, required: true },
  userId:{ type: Schema.Types.ObjectId, ref: 'user' }
});

module.exports = mongoose.model("employer", EmployerSchema);
