const router = require("express").Router();
const Users = require("../../controllers/userController");

// api/users
router.route("/")
  .post(Users.create)
  .get(Users.findUser);
//   .post(users.create)

// Matches with "/api/users/:id"
// router.route("/:id")
//   .get(users.findById)
//   .put(users.update)
//   .delete(users.remove);

module.exports = router;
