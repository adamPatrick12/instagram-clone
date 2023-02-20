const UserProfile = require("../models/user.ts");

exports.get_user_name = [
  (req, res) => {
    UserProfile.find({ email: req.params.email }).exec((err, user) => {
      console.log("username", user);
      res.send(user);
    });
  },
];
