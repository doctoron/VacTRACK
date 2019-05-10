const router = require("express").Router();
const users = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")
  .post(users.findUser);
//   .post(users.create)

// Matches with "/api/books/:id"
// router.route("/:id")
//   .get(users.findById)
//   .put(users.update)
//   .delete(users.remove);

module.exports = router;
