const UserProfile = require("../models/user.ts");

exports.get_user_name = [
  (req, res) => {
    UserProfile.find({ userID: req.params.uid }).exec((err, user) => {
      res.send(user);
    });
  },
];
