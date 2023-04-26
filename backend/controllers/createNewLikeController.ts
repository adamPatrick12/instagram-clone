const UserPost = require("../models/posts.ts");

exports.create_new_like = [
  async (req, res, next) => {
    const postToUpdate = { _id: req.body.postID };
    const postToAddLikeTo = { $push: { likes: req.body.userID } };

    await UserPost.updateOne(postToUpdate, postToAddLikeTo);
  },
];

exports.create_new_unlike = [
  async (req, res, next) => {
    const postToUpdate = { _id: req.body.postID };
    const postToRemoveLikeFrom = { $pull: { likes: req.body.userID } };

    await UserPost.updateOne(postToUpdate, postToRemoveLikeFrom);
  },
];
