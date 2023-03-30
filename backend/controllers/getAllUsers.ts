const UserProfiles = require("../models/user.ts");

exports.get_all_users = [
  (req, res) => {
    UserProfiles.find(
      {},
      { displayName: 1, userName: 1, profilePicture: 1 }
    ).exec((err, allUsers, next) => {
      if (err) {
        return next(err);
      } else {
        res.send(allUsers);
      }
    });
  },
];
