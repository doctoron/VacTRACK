const mongoose = require("mongoose");
const Members = require("../models/Members");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/members", { useNewUrlParser: true }
);

const memberSeed = [
    {
        email: "ron.antonio@google.com",
        password: "vaccineswork",
        username: "ronantonio",
        dob: "03/07/1950",
        gender: "Male",
        pregnancy: "null",
        travelling: "false",
        immunity: "false",
        hiv: "false",
        dormitory: "false",
        healthCareWorker: "true",
        conditions: "false",
        otherFactors: "false",
        zoster: "true",
        date: new Date(Date.now())
    },
    {
        email: "ivonne.lawless@google.com",
        username: "ivonnelawless",
        password: "vaccineswork",
        dob: "05/10/2010",
        gender: "Female",
        pregnancy: "false",
        travelling: "false",
        immunity: "false",
        hiv: "false",
        dormitory: "false",
        healthCareWorker: "true",
        conditions: "false",
        otherFactors: "false",
        zoster: "true",
        date: new Date(Date.now())
    },
    {
        username: "craig.zimbler@google.com",
        password: "vaccineswork",
        dob: "05/10/2010",
        gender: "Male",
        pregnancy: "null",
        travelling: "false",
        immunity: "false",
        hiv: "false",
        dormitory: "false",
        healthCareWorker: "true",
        conditions: "false",
        otherFactors: "false",
        zoster: "true",
        date: new Date(Date.now())
    },
    {
        email: "gatorpazz@gmail.com",
        username: "gpazz",
        password: "vaccineswork",
        dob: "5/10/1990",
        gender: "Male",
        pregnancy: "null",
        travelling: "false",
        immunity: "false",
        hiv: "false",
        dormitory: "false",
        healthCareWorker: "true",
        conditions: "false",
        otherFactors: "false",
        zoster: "true",
        date: new Date(Date.now())
    }
];

// console.log(memberSeed)

Members.collection.deleteMany()
    .then(() => {
        Members.collection.insertMany(memberSeed)
            .then(data => {
                console.log(data.result.n + " records inserted!");
                process.exit(0);
            })
            .catch(err => {
                console.error(err);
                process.exit(1);
            });
    })



/* db
    .remove({})
    .then(() => db.collection.insertMany(memberSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    }); */
