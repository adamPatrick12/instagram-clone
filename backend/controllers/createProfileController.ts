const UserProfile = require("../models/user.ts");

exports.create_user_profile = [
  (req, res, next) => {
    const newUser = new UserProfile({
      userID: req.body.userID,
      userName: req.body.userName,
      displayName: req.body.displayName,
      email: req.body.email,
      profilePicture: req.body.profilePicture,
      banner:
        "600f829d6548eb1f0e0acd0652ffa9add8fad7642f76c9446cd770b6940549eb",
      bio: "Welcome to my profileee",
    });
    newUser.save((err) => {
      if (err) {
        return next(err);
      }
    });
  },
];
