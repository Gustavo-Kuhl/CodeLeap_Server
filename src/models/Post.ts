import mongoose, { Schema } from "mongoose";

const PostSchema: Schema = new Schema({
  username: {
    required: true,
    type: String,
  },
  created_datetime: Date,
  title: String,
  content: String,
});

export const Post = mongoose.model("Posts", PostSchema);
