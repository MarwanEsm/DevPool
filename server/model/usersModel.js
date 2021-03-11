const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, validator : true, required: true },
  password: { type: String, required: true },
  confirmationPassword : { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
//   owner: { type: String, required: true },
});

module.exports = mongoose.model("user", UserSchema);
