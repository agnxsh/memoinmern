import axios from "axios";
//used to call api requests
const url = "http://localhost:5000/posts";
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) =>
  axios.patch(`${url}/${id}/likePost`);
//here we're using it as an API and sending the API request to actions/posts.js
//now we have to focus on adding redux capabilities because all the actions transported from backend to front-end are
//conducted by redux
