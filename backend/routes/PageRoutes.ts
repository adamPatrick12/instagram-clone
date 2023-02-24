const express = require("express");
const router = express.Router();
const createProfileController = require("../controllers/createProfileController.ts");
const createPostController = require("../controllers/createPostController.ts");
const getUsernameController = require("../controllers/getUserName.ts");

router.get("/", (req, res) => {
  res.send("Server is running");
});

//Sign up
router.post("/sign-up", createProfileController.create_user_profile);

// new post
router.post("/new-post", createPostController.create_new_post);

//get posts

router.get("/user-feed", createPostController.get_feed_posts);

//get username

router.get("/user/:uid", getUsernameController.get_user_name);

module.exports = router;
