import React from 'react';
import { Post } from './Post';
import { 
  Button,
  CardGrid,
  PostContainer
} from '../styles/styledComponents';

export const PostList: React.FC = () => {
  return (
    <CardGrid>
      <PostContainer>
        <Post/>
        <Button>Open ...</Button>
      </PostContainer>
    </CardGrid>
  );
}