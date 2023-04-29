const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  image: {
    type: String,
  },
  imageKey: {
    type: String,
  },
  caption: {
    type: String,
  },
  date: {
    type: Number,
  },
  comments: [
    {
      type: Object,
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Post", PostSchema);
