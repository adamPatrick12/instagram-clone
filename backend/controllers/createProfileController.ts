const UserProfile = require("../models/user.ts");

exports.create_user_profile = [
  (req, res, next) => {
    console.log(req.body);

    const newUser = new UserProfile({
      userName: req.body.userName,
      displayName: req.body.displayName,
      email: req.body.email,
    });
    newUser.save((err) => {
      if (err) {
        return next(err);
      }
    });
  },
];
