const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// change all lines below to match our database
const memberSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Member = mongoose.model("members", memberSchema);

module.exports = Member;
