const Member = require('../models/Members');
// Defining methods for the membrerConroller
module.exports = {
  findAll: (req, res) => {
    Members
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: (req, res) => {
    Members
      .find({username: req.body.email, password: req.body.password })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json({ msg: "email/Password not found"}));
  },
  findById: (req, res) => {
    Members
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
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
