import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/@models/post.model';
import { addPost } from './posts.actions';
import { initialPostsState } from './posts.state';

const _postsReducer = createReducer(
  initialPostsState,
  on(addPost, (state: any, action: any) => {
    let post: Post = { ...action.post };
    post.id = ((state.posts).length + 1).toString();

    return { ...state, posts: [...state.posts, post] };
  }),
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
