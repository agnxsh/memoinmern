const reducer = (posts = [], action) => {
  switch (action.type) {
    case "DELETE":
      return posts.filter((post) => post._id !== action.payload);
    case "UPDATE":
    case "LIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];

    // here action.payload acts as the updated post

    //the return in case of an update function will always be
    //a posts.map( )
    //we use a .map function to accept an array and then print a final updated version
    //of that array
    default:
      return posts;
  }
};
export default reducer;
//states always has to have an initial array,
//because essentially our posts are gonna be an array of the given image data[]
