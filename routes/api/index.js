const router = require("express").Router();
const members = require("./members");
const users = require ("./user");

// Member routes
router.use("/members", members);
router.use("/users", users);

module.exports = router;
