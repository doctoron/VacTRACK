const Users = require('../models/Users');
// Defining methods for the userController
module.exports = {
    // findAll: (req, res) => {
    //     User
    //         .find(req.query)
    //         .sort({ date: -1 })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    findUser: (req, res) => {
        console.log('Direct body coming in', req.body);
        Users.find({
            email: req.body.email,
            password: req.body.password
        }).then((data) => {
            console.log('This is what was returned', data);
            if (!Array.isArray(data) || !data.length) {
                return res.status(400).json({ msg: "Email/Password combination not found" })
            } else {
                res.json(data);
            }
        });
        // .then(data => {

        //     )
        // .catch(err => res.status(400).json(err));
        // , function(err, user) {
        //     console.log('the user', user);
        //     if(err) {
        //         return res.status(400).json({ msg: 'username/password is invalid'});
        //     }
        //     res.json(user);
        // };
    },
    findById: (req, res) => {
        Users
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // findById: (req, res) => {
    //     User
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    create: (req, res) => {
        console.log('rea.body', req.body);
        Users
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    update: (req, res) => {
        Users
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        Users
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
