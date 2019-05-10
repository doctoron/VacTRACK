const User = require('../models/user');
// Defining methods for the booksController
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
        User.findOne({ email: req.body.email}, function (err, data) {
            if (!data){
                return res.status(400).json({ msg: "Email not found"})
            }
            
            res.json(data);
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
        User
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
        User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    update: (req, res) => {
        User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
