const UserPost = require("../models/posts.ts");

exports.create_new_comment = [
  async (req, res, next) => {
    const commentObject = {
      userComment: req.body.userComment,
      profilePicture: req.body.profilePicture,
      userName: req.body.userName,
    };

    const postToUpdate = { _id: req.body.postID };
    const commentToAddToPost = { $push: { comments: commentObject } };

    await UserPost.updateOne(postToUpdate, commentToAddToPost);
  },
];
