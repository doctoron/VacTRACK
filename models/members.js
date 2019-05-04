const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// change all lines below to match our database
const memberSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const memberSignup = mongoose.model("members", memberSchema);

module.exports = memberSignup;
