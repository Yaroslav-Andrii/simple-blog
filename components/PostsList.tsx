import React from 'react';
import Link from 'next/link';

import { Post } from './Post';
import IPost from '../interfaces/IPost';

import { 
  Button,
  CardGrid,
  PostContainer
} from '../styles/styledComponents';

export const PostList = (props) => {
  let postList: JSX.Element[];

  if (props.posts) {
    postList = props.posts.map((post: IPost) => {
      return (
        <PostContainer key={post.id}>
          <Post post={post}/>
          <Link 
            href="/posts/[postId]" 
            as={`/posts/${post.id}`}
          >
            <Button>Open ...</Button>
          </Link>
        </PostContainer>
      );
    });
  }

  return (
    <CardGrid>
      {postList}
    </CardGrid>
  );
}