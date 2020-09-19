import React from 'react';
import { 
  Button,
  Container,
  Form,
  Label,
  Input,
  TextArea,
} from '../styles/styledComponents';

export const PostForm: React.FC = () => {
  return (
    <Container>
      <Form>
        <Label htmlFor="title">TITLE :</Label>
        <Input 
          type="text" 
          id="title" 
          name="title" 
          placeholder="The post title"
        />
        <Label htmlFor="text">CONTENT :</Label>
        <TextArea 
          id="text"
          name="text"
          placeholder="The post"
        />
        <Button type="submit">Create</Button>
      </Form>
    </Container>
  );
}