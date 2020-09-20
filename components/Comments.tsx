import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import IComment from '../interfaces/IComment';
import { createComment } from '../store/actions';

import { 
  Input, 
  Label, 
  Button,
  CommentSection,
  CommentsList,
  CommentItem,
  CommentForm,
} from '../styles/styledComponents';

export const Comments = ({ comments, postId, addComment }) => {
  /* Input handler */
  const [myComment, setMyComment] = useState({postId, body: ''});
  const inputHandler = (event) => {
    setMyComment({...myComment, body: event.target.value});
  };

  /* Submit handler */
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    const newCommentId = comments[comments.length - 1] 
                          ? comments[comments.length - 1].id + 1 
                          : 1;

    const newComment: IComment = {
      ...myComment,
      id: newCommentId
    };

    dispatch( createComment(newComment) );
    addComment(newComment);

    setMyComment({postId, body: ''});
  }

  return (
    <CommentSection>
        <h4>COMMENTS: </h4>
        <CommentsList>
          {
            comments.map((comment) => {
              return (
                <CommentItem 
                  key={comment.id}
                >
                  {comment.body}
                </CommentItem>
              );
            })
          }
        </CommentsList>
        
        <CommentForm onSubmit={submitHandler}>
          <Label htmlFor="comment">Live your comment:</Label>
          <div>
            <Input 
              id="comment" 
              name="comment" 
              type="text" 
              placeholder="Your comment..."
              value={myComment.body}
              onChange={inputHandler}
            />
            <Button 
              type='submit'
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