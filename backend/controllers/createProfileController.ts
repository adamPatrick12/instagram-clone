const UserProfile = require("../models/user.ts");

exports.create_user_profile = [
  (req, res, next) => {
    const newUser = new UserProfile({
      userID: req.body.userID,
      userName: req.body.userName,
      displayName: req.body.displayName,
      email: req.body.email,
      profilePicture: req.body.profilePicture,
    });
    newUser.save((err) => {
      if (err) {
        return next(err);
      }
    });
  },
];
