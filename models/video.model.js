const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      default: "No description",
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    strict: false,
    timestamps: true,
  }
);

const video = mongoose.model("video", videoSchema);

module.exports = video;
