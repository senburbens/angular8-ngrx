import { Post } from "src/app/@models/post.model";

export interface PostsState{
  posts : Post[];
}

export const initialPostsState : PostsState = {
  posts : [
    {
      id : '1',
      title : 'Sample 1',
      description : 'Sample description 1'
    },
    {
      id : '2',
      title : 'Sample 2',
      description : 'Sample description 2'
    }
  ]
};

