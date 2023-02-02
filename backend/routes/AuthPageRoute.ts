const express = require("express");
const router = express.Router();
const createProfileController = require("../controllers/createProfileController.ts");

router.post("/sign-up", createProfileController.create_user_profile);
router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
