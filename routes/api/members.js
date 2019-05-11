const router = require("express").Router();
const Members = require("../../controllers/memberController");

// Matches with "/api/members"
router.route("/")
  .post(Members.create)
  .get(Members.findUser);
  // .post(Members.findOne)

// Matches with "/api/Members/:id"
// router.route("/:id")
//   .get(Members.findById)
//   .put(Members.update)
//   .delete(Members.remove);

module.exports = router;
