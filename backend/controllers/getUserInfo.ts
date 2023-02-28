const UserProfile = require("../models/user.ts");

exports.get_user_profile_info = [
  (req, res) => {
    UserProfile.find({ userID: req.params.uid })
      .populate("posts")
      .exec((err, user) => {
        res.send(user);
        console.log(user);
      });
  },
];
