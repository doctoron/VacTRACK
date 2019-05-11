const mongoose = require("mongoose");
const Users = require("../models/Users");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/members", { useNewUrlParser: true }
);

const userSeed = [
  {
    email: "ron.antonio@google.com",
    password: "vaccineswork",
    date: new Date(Date.now())
  },
  {
    email: "ivonne.lawless@google.com",
    password: "vaccineswork",
    date: new Date(Date.now())
  },
  {
    email: "craig.zimbler@google.com",
    password: "vaccineswork",
    date: new Date(Date.now())
  }
];

// console.log(userSeed)

Users.collection.deleteMany()
  .then(() => {
    Users.collection.insertMany(userSeed)
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  })


/*
Users
  .deleteMany({})
  .then(() => Users.insertMany(userSeed))
  .then(data => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });*/
