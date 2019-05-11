const Members = require('../models/Members');
// Defining methods for the memberController
module.exports = {
  // findAll: (req, res) => {
  //   Members
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findUser: (req, res) => {
    console.log('Direct body coming in', req.body);
    Members.find({
      email: req.body.email,
      password: req.body.password
    }).then((data) => {
      console.log('This is what was returned', data);
      if (!Array.isArray(data) || !data.length) {
        return res.status(400).json({ msg: "You must be logged in to view this record" })
      } else {
        res.json(data);
      }
    });
  },
  findById: (req, res) => {
    Members
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    console.log('rea.body', req.body);
    Members
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    Members
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    Members
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
