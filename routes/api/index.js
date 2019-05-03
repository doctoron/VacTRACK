const router = require("express").Router();
const members = require("./members");

// Member routes
router.use("/members", members);

module.exports = router;
