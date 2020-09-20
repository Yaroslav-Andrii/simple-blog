import Axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { MainLayout } from "../../components/MainLayout";
import { Post } from "../../components/Post";
import { Comments } from '../../components/Comments';
import { PostForm } from '../../components/PostForm';

import { PostApiPrefix } from '../../store/apiRoutes';
import { deletePost } from '../../store/actions';

import { Button } from '../../styles/styledComponents';
import { usePostController } from '../../hooks/postHooks';

const PostPage = (props) => {
  const { postState, changePost, addComment } = usePostController(props.post);

  /* Delete post */
  const dispatch = useDispatch();
  const router = useRouter();

  const deleteHandler = (event) => {
    dispatch( deletePost(postState.id) );
    router.push('/');
  };

  /* Change mode switcher */
  const [changeMode, setChangeMode] = useState(false);
  const changeHandler = (event) => {
    setChangeMode(state => !state);
  };

  return (
    <MainLayout title={postState.title}>
      { 
        changeMode 
        ? 
          <PostForm 
            toggleMode={changeHandler} 
            changePost={changePost}
            post={postState}
          /> 
        : 
          <>
          <Post post={postState}/>

          <Button 
            onClick={changeHandler}
            style={{margin: '0 5px'}}
          >
            Change
          </Button>

          <Button 
            onClick={deleteHandler}
          >
            Delete
          </Button>
          </>
      }
      <Comments 
        addComment={addComment}
        comments={postState.comments}
        postId={postState.id}
      />
    </MainLayout>
  );
};

export const getServerSideProps = async (context) => {
  try {

    const reqUrl = PostApiPrefix.GET_POST + 
                    context.params.postId + 
                    PostApiPrefix.COMMENTS_QUERY;

    const response: AxiosResponse = await Axios.get(reqUrl);

    return {
      props: { 
        post: response.data 
      }
    }

  } catch (error) {
    console.error(error.message);
  }
}

export default PostPage;