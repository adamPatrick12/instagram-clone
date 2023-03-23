const UserProfiles = require("../models/user.ts");

exports.get_user_names = [
  (req, res) => {
    UserProfiles.find({}, { userName: 1, email: 1, _id: 0 }).exec(
      (err, user, next) => {
        if (err) {
          return next(err);
        }
        res.send(user);
      }
    );
  },
];
