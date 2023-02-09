const express = require("express");
const router = express.Router();
const createProfileController = require("../controllers/createProfileController.ts");
const createPostController = require("../controllers/createPostController.ts");

router.get("/", (req, res) => {
  res.send("Server is running");
});

//Sign up
router.post("/sign-up", createProfileController.create_user_profile);

// new post
router.post("/new-post", createPostController.create_new_post);

module.exports = router;

//instagram-clone-ap-s3
