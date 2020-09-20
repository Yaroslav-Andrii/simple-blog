import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { createPost, showAlert, updatePost } from '../store/actions';

import { 
  Button,
  Container,
  Form,
  Label,
  Input,
  TextArea,
} from '../styles/styledComponents';

export const PostForm = (props) => {

  /* Initialization */
  const initialState = {
    title: '',
    body: '',
    id: null,
    changeMode: false,
  }

  if (props.post) {
    initialState.title = props.post.title,
    initialState.body = props.post.body,
    initialState.id = props.post.id;
    initialState.changeMode = true;
  }

  /* inputHandler */
  const [postState, setPostState] = useState(initialState);
  const inputHandler = (event) => {
    setPostState({
      ...postState,
      [event.target.name]: event.target.value
    })
  }

  /* submitHandler */
  const dispatch = useDispatch();
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();

    if (postState.body.trim() && postState.title.trim() ) {

      /* Update store action */
      if (postState.changeMode) {
        dispatch( 
          updatePost({
            title: postState.title,
            body: postState.body,
            id: postState.id,
          }) 
        );

        /* Local changing */
        props.changePost(postState.title, postState.body);
        props.toggleMode();

      } else {

        /* Create store action */
        dispatch( 
          createPost({
            title: postState.title,
            body: postState.body,
            id: Date.now(),
          }) 
        );

        /* Local changing */
        setPostState(initialState);
      }

    } else {
      
      /* Alert store action */
      dispatch( 
        showAlert({
          status: 'warning',
          title: 'SOME FIELD IS EMPTY!',
          text: 'Type some text!'
        }) 
      )
    }
  }

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Label htmlFor="title">TITLE :</Label>
        <Input 
          type="text" 
          id="title" 
          name="title" 
          placeholder="The post title"
          value={postState.title}
          onChange={inputHandler}
        />
        <Label htmlFor="text">CONTENT :</Label>
        <TextArea 
          id="text"
          name="body"
          placeholder="The post"
          value={postState.body}
          onChange={inputHandler}
        />
        <Button type="submit">
          {postState.changeMode ? 'Update' : 'Create'}
        </Button>
      </Form>
    </Container>
  );
}