const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/members", { useNewUrlParser: true }
);

const memberSeed = [
  {
    username: "Ron.antonio@google.com",
    passsword: "vaccinationswork",
    date: new Date(Date.now())
  },
  {
    username: "Ivonne.Lawless@google.com",
    passsword: "vaccinationswork",
    date: new Date(Date.now())
  },
  {
    username: "Craig.zimbler@google.com",
    passsword: "vaccinationswork",
    date: new Date(Date.now())
  }
];

db.Members
  .remove({})
  .then(() => db.Members.collection.insertMany(memberSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
