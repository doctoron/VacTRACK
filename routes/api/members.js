const router = require("express").Router();
const Members = require("../../controllers/memberController");

// Matches with "/api/members"
router.route("/")
  .get(Members.findAll)
  .post(Members.create)
  .post(Members.findOne)

// Matches with "/api/Members/:id"
router.route("/:id")
  .get(Members.findById)
  .put(Members.update)
  .delete(Members.remove);

module.exports = router;
