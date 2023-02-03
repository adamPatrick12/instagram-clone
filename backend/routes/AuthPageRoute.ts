const express = require("express");
const router = express.Router();
const createProfileController = require("../controllers/createProfileController.ts");

router.post("/sign-up", createProfileController.create_user_profile);
router.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = router;
