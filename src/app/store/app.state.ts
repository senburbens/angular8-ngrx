import { counterReducer } from "../counter/counter/state/counter.reducers";
import { CounterState } from "../counter/counter/state/counter.state";
import { postsReducer } from "../post/posts-list/state/posts.reducers";
import { PostsState } from "../post/posts-list/state/posts.state";


export interface AppState{
  counter : CounterState;
  posts : PostsState
}

export const appReducer = {
  counter : counterReducer,
  posts : postsReducer
}
