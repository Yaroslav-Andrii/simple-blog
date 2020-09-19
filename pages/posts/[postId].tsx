import { MainLayout } from "../../components/MainLayout";
import { Post } from "../../components/Post";
import { Comments } from '../../components/Comments';
import { Button } from '../../styles/styledComponents';

const PostPage = () => {
  return (
    <MainLayout title={'post i'}>
      <Post/>
      <Button style={{margin: '0 5px'}}>Change</Button>
      <Button>Delete</Button>
      <Comments/>
    </MainLayout>
  );
};

export default PostPage;