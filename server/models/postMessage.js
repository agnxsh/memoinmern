import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  //mongoose helps us get a uniformity of document
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
// Node.js follows the CommonJS module system,
//  and the builtin require function is the easiest way to
//  include modules that exist in separate files.
//  The basic functionality of require is that it reads a JavaScript file,
// executes the file, and then proceeds to return the exports object
