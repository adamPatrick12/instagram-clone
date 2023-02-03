const UserProfile = require("../models/user.ts");

exports.create_user_profile = [
  (req, res, next) => {
    console.log(req.body);

    const newPost = new UserProfile({
      userName: req.body.userName,
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
