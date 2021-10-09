import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

//these controllers are used to retrieve data from the mongo database
export const getPosts = async (req, res) => {
  //now it would take time to find and retrieve the data because they are asynchronous data
  //sets, that's why we use the await keyword and the async keywords respectively.
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
    //which basically means everything went fine
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  //now here we have to feed in the data
  //and for that we need to create a form using front-end
  //here, we're using React.js
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id: ");
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};

//all the https requests that start with 100 are informational
//200s are successful
//300s are redirectional
//400s are client errors
//500s are server errors

export const deletePost = async (req, res) => {
  //we get the id
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id: ");
  await PostMessage.findByIdAndRemove(id);
  console.log("DELETE !");
  res.json({ message: "Post deleted successfully" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id: ");

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};
