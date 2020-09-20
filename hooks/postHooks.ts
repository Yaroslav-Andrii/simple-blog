import { useState } from 'react';
import IComment from '../interfaces/IComment';
import IPost from '../interfaces/IPost';

export const usePostController = (post: IPost) => {
  const [postState, setPost] = useState(post);
  const changePost = (title: string, body: string): void => {
    setPost({...postState, title, body});
  }

  const addComment = (comment: IComment) => {
    setPost((post) => {
      return {
        ...postState,
        comments: [
          ...postState.comments,
          comment
        ]
      }
    });
  }

  return { postState, changePost, addComment };
}