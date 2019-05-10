const mongoose = require("mongoose");
const db = require("../models/User");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/members", { useNewUrlParser: true }
);

const userSeed = [
  {
    username: "ron.antonio@google.com",
    passsword: "vaccinationswork",
    date: new Date(Date.now())
  },
  {
    username: "ivonne.Lawless@google.com",
    passsword: "vaccinationswork",
    date: new Date(Date.now())
  },
  {
    username: "craig.zimbler@google.com",
    passsword: "vaccinationswork",
    date: new Date(Date.now())
  }
];

db.users
  .remove({})
  .then(() => db.users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
