const Member = require('../models/members');
// Defining methods for the booksController
module.exports = {
  findAll: (req, res) => {
    Member
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: (req, res) => {
    Member
      .find({username: req.body.username, password: req.body.password })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json({ msg: "Username/Password not found"}));
  },
  findById: (req, res) => {
    Member
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    Member
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    console.log('rea.body', req.body);
    Member
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    Member
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    Member
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
