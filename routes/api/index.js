const router = require("express").Router();
const Users = require ("./user");
const Members = require("./members");

// Member routes
// api/users/myRoutes
// api/members/routes
router.use("/users", Users);
router.use("/members", Members);

module.exports = router;
