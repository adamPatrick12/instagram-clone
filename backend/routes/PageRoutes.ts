const express = require("express");
const router = express.Router();
const createProfileController = require("../controllers/createProfileController.ts");
const createPostController = require("../controllers/createPostController.ts");
const getUserInfo = require("../controllers/getUserInfo.ts");
const getUsernameAndEmail = require("../controllers/getUsernameEmail.ts");
const createNewComment = require("../controllers/createNewCommentController.ts");
const createNewLike = require("../controllers/createNewLikeController.ts");
const getUserProfile = require("../controllers/getUserProfile.ts");
const getAllUsersController = require("../controllers/getAllUsers.ts");
const createFollow = require("../controllers/createFollower.ts");

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

router.post("/like-post", createNewLike.create_new_like);

router.post("/unlike-post", createNewLike.create_new_unlike);

router.post("/unlike-post", createNewLike.create_new_unlike);

router.get("/user-profile/:profileID", getUserProfile.get_user_profile);

//follow User

router.post("/follow-user", createFollow.post_new_follow);

router.post("/unfollow-user", createFollow.post_new_unfollow);

// get all users

router.get("/all-users", getAllUsersController.get_all_users);

module.exports = router;
