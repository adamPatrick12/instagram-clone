const express = require("express");
const router = express.Router();
const createProfileController = require("../controllers/createProfileController.ts");
const createPostController = require("../controllers/createPostController.ts");
const getUserInfo = require("../controllers/getUserInfo.ts");
const getUsernameAndEmail = require("../controllers/getUsernameEmail.ts");
const createNewComment = require("../controllers/createNewCommentController.ts");

router.get("/", (req, res) => {
  res.send("Server is running");
});

//Sign up
router.post("/sign-up", createProfileController.create_user_profile);

// new post
router.post("/new-post", createPostController.create_new_post);

//get posts

router.get("/user-feed", createPostController.get_feed_posts);

//get single post

router.get("/user-post/:postID", createPostController.get_single_post);

//get user_info

router.get("/user/:uid", getUserInfo.get_user_profile_info);

//get user_info

router.get("/usernames", getUsernameAndEmail.get_user_names);

//Create new comment

router.post("/post-comment", createNewComment.create_new_comment);

module.exports = router;
