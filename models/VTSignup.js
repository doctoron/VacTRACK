const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// change all lines below to match our database
const VTSignupSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const VTSignup = mongoose.model("members", VTSignupSchema);

module.exports = VTSignup;
