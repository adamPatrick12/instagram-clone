const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userID: {
    type: String,
  },
  userName: {
    type: String,
    minlength: 3,
    maxlength: 16,
  },
  displayName: {
    type: String,
    minlength: 3,
    maxlength: 32,
  },
  email: {
    type: String,
    minlength: 3,
    maxlength: 64,
  },
  theme: {
    type: String,
    default: "light",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  bio: {
    type: String,
    maxlength: 300,
  },
  profilePicture: {
    type: String,
  },
  banner: {
    type: String,
  },
  password: {
    type: String,
    minlength: 6,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
