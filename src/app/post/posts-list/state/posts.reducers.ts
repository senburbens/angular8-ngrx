import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/@models/post.model';
import { addPost, deletePost, updatePost } from './posts.actions';
import { initialPostsState } from './posts.state';

const _postsReducer = createReducer(
  initialPostsState,
  on(addPost, (state: any, action: any) => {
    let post: Post = { ...action.post };
    post.id = ((state.posts).length + 1).toString();

    return { ...state, posts: [...state.posts, post] };
  }),
  on(updatePost, (state: any, action: any) => {
    const updatedPosts: Post[] = state.posts.map((post: Post) => {
      return action.post.id === post.id ? action.post : post;
    });

    return { ...state, posts: updatedPosts };
  }),
  on(deletePost, (state: any, { id }) => {
    const updatedPosts = state.posts.filter((post: Post) => {
      return post.id !== id;
    });

    return { ...state, posts: updatedPosts };
  })
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
