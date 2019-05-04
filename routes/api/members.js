const router = require("express").Router();
const members = require("../../controllers/memberController");

// Matches with "/api/books"
router.route("/")
  .get(members.findAll)
  .post(members.create)
  .post(member.findOne)

// Matches with "/api/books/:id"
router.route("/:id")
  .get(members.findById)
  .put(members.update)
  .delete(members.remove);

module.exports = router;
