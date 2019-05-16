const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// change all lines below to match our database
const MemberSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  dob: { type: Date, default: Date.now },
  gender: {type: String, required:true},
  pregnancy: {type: String },
  dob: {type: String, required: true},
  travelling: {type: Boolean, required: true},
  immunity: {type: Boolean, required: true},
  hiv: {type: Boolean, required: true},
  cd4: {type: String },
  dormitory: {type: Boolean, required: true},
  healthCareWorker: {type: Boolean, required: true},
  conditions: {type: Boolean, required: true},
  otherFactors: {type: Boolean, required: true},
  zoster: {type: Boolean, required: true}
});

const Members = mongoose.model("Members", MemberSchema);

module.exports = Members;
