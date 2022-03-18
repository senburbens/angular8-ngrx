import { createReducer, on } from '@ngrx/store';
import { initialPostsState } from './posts.state';

const _postsReducer = createReducer(
  initialPostsState,
  // on(increment, (state : any) => ({ ...state, counter : state.counter + 1 })),
  // on(decrement, (state : any) => ({ ...state, counter : state.counter - 1 })),
  // on(reset, (state : any) => ({ ...state, counter : 0 }))
);

export function postsReducer(state : any, action : any) {
  return _postsReducer(state, action);
}
