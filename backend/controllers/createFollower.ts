const UserProfile = require("../models/user.ts");

exports.post_new_follow = [
  async (res, req, next) => {
    const userWhoisFollowing = res.body.currentUser;
    const userGettingTheFollow = res.body.userToUpdate;

    //updating the user object receiving the follow
    await UserProfile.updateOne(
      { _id: userGettingTheFollow },
      { $push: { followers: userWhoisFollowing } }
    );

    //updating the user object doing the follow, adding

    await UserProfile.updateOne(
      { _id: userWhoisFollowing },
      { $push: { following: userGettingTheFollow } }
    );
  },
];

exports.post_new_unfollow = [
  async (res, req, next) => {
    const userWhoisUnFollowing = res.body.currentUser;
    const userGettingTheUnfollow = res.body.userToUpdate;

    //updating the user object receiving the follow
    await UserProfile.updateOne(
      { _id: userGettingTheUnfollow },
      { $pull: { followers: userWhoisUnFollowing } }
    );

    //updating the user object doing the follow, adding

    await UserProfile.updateOne(
      { _id: userWhoisUnFollowing },
      { $pull: { following: userGettingTheUnfollow } }
    );
  },
];
