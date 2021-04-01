const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  email: { type: String, validator: true, required: true },
  password: { type: String, required: true },
  owner: { type: String, required: true },
  id_: Schema.Types.ObjectId,
  // isRegistered: { type: Schema.Types.Boolean, ref: "candidate" },
});

module.exports = mongoose.model("user", UserSchema);
