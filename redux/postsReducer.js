import { act } from "react-test-renderer";
import { combineReducers } from "redux";

const INITIAL_STATE = {
  ifFetching: true,
  posts: [],
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_POST":
      return { posts: [...state.posts, action.postInfo] };
    case "REQUEST_POSTS":
      console.log(state);
      return { isFetching: true, posts: [...state.posts] };
    case "RECEIVE_POSTS":
      console.log(state);
      return { isFetching: false, posts: [...action.posts] };
    default:
      return state;
  }
};

// export default combineReducers({
//   posts: postsReducer,
// });
export default postsReducer;
