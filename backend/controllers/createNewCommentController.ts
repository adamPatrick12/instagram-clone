const UserPost = require("../models/posts.ts");
const Comments = require("../models/comments.ts");

exports.create_new_comment = [
  async (req, res, next) => {
    const newComment = new Comments({
      comment: req.body.userComment,
      user: req.body.userID,
    });
    newComment.save((err) => {
      if (err) {
        return next(err);
      }
    });

    const postToUpdate = { _id: req.body.postID };
    const commentToAddToPost = { $push: { comments: newComment._id } };

    await UserPost.updateOne(postToUpdate, commentToAddToPost);
  },
];
