const UserProfile = require("../models/user.ts");

exports.post_updated_profile = [
  async (req, res, next) => {
    const profileToUpdate = { _id: req.body.profileToUpdate };

    console.log(req.body.newBio);

    await UserProfile.updateOne(profileToUpdate, {
      displayName: req.body.newDisplayName,
    });

    await UserProfile.updateOne(profileToUpdate, {
      bio: req.body.newBio,
    });
  },
];
