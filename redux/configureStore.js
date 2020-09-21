import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import postsReducer from "./postsReducer";

export default function configureStore(preloadedState) {
  return createStore(
    postsReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
}
