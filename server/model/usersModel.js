const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
//   owner: { type: String, required: true },
});

module.exports = mongoose.model("user", UserSchema);
