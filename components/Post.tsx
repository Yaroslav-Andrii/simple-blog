import React from 'react';
import { 
  H3,
  Paragraph
} from '../styles/styledComponents';

export const Post = ({ post }) => {
  return (
    <>
      <H3>{post.title}</H3>
      <Paragraph>{post.body}</Paragraph>
    </>
  );
};