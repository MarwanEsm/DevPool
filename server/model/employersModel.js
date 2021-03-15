const mongoose = require("mongoose");

const EmployerSchema = new mongoose.Schema({
  employerName: { type: String, required: true },
  website: { type: String, required: true },
  location: {type: String},
  fieldOfBusiness: { type: String, required: true },
  concernedPersonEmail: { type: String, required: true },
  phoneNo: { type: Number, required: true },
});



module.exports = mongoose.model("employer", EmployerSchema);
