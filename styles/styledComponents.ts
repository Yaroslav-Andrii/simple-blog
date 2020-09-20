import styled from 'styled-components';

export const Button = styled.button`
  background-color: white;
  float: right;
  text-align: center; 
  text-transform: uppercase;
  border: 2px solid black;
  line-height: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  transition: all .1s;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 3px black;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px;

  &>div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px dashed black;

    &>button {
      align-self: flex-end;
    }
  }
`;

export const PostContainer = styled.div`
  padding: 10px;
`;

export const Container = styled.div`
  max-width: 1080px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  margin: 0 0 15px 0;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
`;

export const TextArea = styled.textarea`
  padding: 10px 15px;
  font-size: 16px;
  margin: 0 0 15px 0;
  resize: none;
  border-radius: 5px;
  height: 250px;
`;

export const H3 = styled.h3`
  text-align: center;
  text-transform: uppercase;
  padding: 10px 0 20px 0;
  font-size: 25px;
`;

export const Paragraph = styled.p`
  text-align: justify;
  padding-bottom: 10px;
  color: #738A94;
`;

export const Navigation = styled.nav`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  background: #090a0b no-repeat 50%;
  background-image: url(/publication-cover.png);
  background-size: cover;
  padding: 20px 10px;
`;

export const Anchor = styled.a`
  color: white;
  text-decoration: none;
  transition: opacity .1s;
  margin-right: 1rem;

  &:hover {
    opacity: .8;
    cursor: pointer;
  }
`;

export const Main = styled.main`
  margin-top: 60px;
  padding: 20px 0;
`;

export const AlertContainer = styled.div`
  border: 2px solid black;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  position: relative;
  margin: 0 0 30px 0;

  &.error {
    border-color: red;
    color: red;

    &>button {
      border-color: red;
      background: red;
      color: white;

      &:hover {
        background: white;
        color: red;
      }
    }
  }

  &.warning {
    border-color: orange;
    color: orange;

    &>button {
      border-color: orange;
      background: orange;
      color: white;

      &:hover {
        background: white;
        color: orange;
      }
    }
  }

  &.success {
    border-color: green;
    color: green;

    &>button {
      border-color: green;
      background: green;
      color: white;

      &:hover {
        background: white;
        color: green;
      }
    }
  }

  &>p {
    padding-right: 30px;
  }

  &>button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    border: 2px solid black;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    background: black;
    color: white;

    &:hover {
      background: white;
      color: black;
    }
  }
`;

export const CommentSection = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const CommentsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const CommentItem = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  &>div {
    display: flex;

    &>input {
      flex-grow: 1;
      margin: 0 5px 0 0;
    }

    &>button 
  }
`;