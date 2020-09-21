export const addPost = (postInfo) => ({
  type: "ADD_POST",
  postInfo,
});

const requestPosts = (url) => {
  return {
    type: "REQUEST_POSTS",
    url,
  };
};

const receivePosts = (json) => {
  return {
    type: "RECEIVE_POSTS",
    posts: json.slice(0, 10),
  };
};

const fetchPosts = (url) => {
  return (dispatch) => {
    dispatch(requestPosts(url));
    return fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(receivePosts(json)));
  };
};

const shouldFetchPosts = (state) => {
  if (!state.posts) {
    return true;
  } else if (state.isFetching) {
    return false;
  }
  return true;
};

export const fetchPostsIfNeeded = () => {
  return (dispatch, getState) => {
    console.log(getState());
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts("https://jsonplaceholder.typicode.com/posts"));
    }
  };
};
