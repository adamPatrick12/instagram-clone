const UserProfile = require("../models/user.ts");

exports.create_user_profile = [
  (req, res, next) => {
    const newPost = new UserProfile({
      username: req.body.username,
      displayName: req.body.displayName,
      email: req.body.email,
    });
    newPost.save((err) => {
      if (err) {
        return next(err);
      }
    });
  },
];
