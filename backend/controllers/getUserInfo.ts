const UserProfile = require("../models/user.ts");

exports.get_user_profile_info = [
  (req, res) => {
    UserProfile.find({ userID: req.params.uid })
      .populate("posts")
      .populate("followers", "_id displayName profilePicture userName")
      .populate("following", "_id displayName profilePicture userName")
      .exec((err, user) => {
        res.send(user);
      });
  },
];
