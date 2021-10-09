import * as api from "../api/index.js";

//now we have to create Action Creators
//action creators are functions which return actions

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    //here we're creating a response which passes data as an object and
    //gets the api request and fetches the data from api.fetchPosts( )
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    //destructuring the response and immediately getting the data
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//i really can't understand the issue with the Network error
//it's likely in some npm dependency like axios or cors

//however getting the data from the payload is an asynchronous function
//therefore we use redux-thunk
//now we're successfully using Redux to successfully pass the data from the backend
//to the viewport
