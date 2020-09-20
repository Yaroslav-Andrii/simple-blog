import { useDispatch, useSelector } from 'react-redux';
import Axios, { AxiosResponse } from 'axios';
import { MainLayout } from '../components/MainLayout';
import { PostList } from '../components/PostsList';
import { PostApi } from '../store/apiRoutes';
import { initPostsList } from '../store/actions';
import IState from '../interfaces/IState';
import IPost from '../interfaces/IPost';

const LatestPostsPage = (props) => {
  const dispatch = useDispatch();
  const posts: IPost[] = useSelector((state: IState) => state.postsState);

  if (props.posts) {
    dispatch( initPostsList(props.posts) );
  }

  return (
    <MainLayout>
      <PostList posts={posts}/>
    </MainLayout>
  );
};

LatestPostsPage.getInitialProps = async (context) => {
  try {

    if (!context.req) {
      return { 
        posts: null 
      }
    }
  
    const reqUrl = PostApi.GET_POSTS_URL;
    const response: AxiosResponse = await Axios.get(reqUrl);
  
    return { 
      posts: response.data 
    }

  } catch (error) {
    console.error(error.message);
  }
}

export default LatestPostsPage;