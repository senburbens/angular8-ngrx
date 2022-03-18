// import { counterReducer } from "../counter/state/counter.reducers";
import { CounterState } from "../counter/state/counter.state";
// import { postsReducer } from "../post/state/posts.reducers";
import { PostsState } from "../post/state/posts.state";


export interface AppState {
  counter: CounterState;
  posts: PostsState
}


// appReducer : for shared states between multiple modules only

// export const appReducer = {
//   counter: counterReducer,
//   posts: postsReducer
// }
