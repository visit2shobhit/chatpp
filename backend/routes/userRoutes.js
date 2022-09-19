const express = require("express");
const router = express.Router(); // Express Router Instance
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
router.post("/login", authUser);
router.route("/").post(registerUser).get(protect, allUsers);
// router.route("/").get(allUsers);

module.exports = router;
