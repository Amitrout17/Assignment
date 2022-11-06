const express = require("express");
const { createUserData, getUserData, DeleteUser, sortByDate, sortByName } = require("../controller/dataController");
const router = express.Router();
router.route("/createUser").post(createUserData);
router.route("/userData").get(getUserData);
router.route("/deleteUser").delete(DeleteUser);
router.route("/sortByDate").get(sortByDate);
router.route("/sortByName").get(sortByName);

module.exports = router;
 