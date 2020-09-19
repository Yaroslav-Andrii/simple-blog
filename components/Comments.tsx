import React from 'react';
import { 
  Input, 
  Label, 
  Button,
  CommentSection,
  CommentsList,
  CommentItem,
  CommentForm,
} from '../styles/styledComponents';
import styled from 'styled-components';

export const Comments: React.FC = () => {
  return (
    <CommentSection>
        <h4>COMMENTS: </h4>
        <CommentsList>
          <CommentItem>Lorem ipsum dolor sit amet.</CommentItem>
          <CommentItem>Lorem ipsum dolor sit amet.</CommentItem>
          <CommentItem>Lorem ipsum dolor sit amet.</CommentItem>
          <CommentItem>Lorem ipsum dolor sit amet.</CommentItem>
        </CommentsList>
        <CommentForm>
          <Label htmlFor="comment">Live your comment:</Label>
          <div>
            <Input 
              id="comment" 
              name="comment" 
              type="text" 
              placeholder="Your comment..."
            />
            <Button 
              style={{
                lineHeight: "40px",
                padding: "0 15px",
              }}
            >
              Send
            </Button>
          </div>
        </CommentForm>
      </CommentSection>
  );
}