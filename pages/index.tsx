import { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { PostList } from '../components/PostsList';

const LatestPostsPage: NextPage = () => {
  return (
    <MainLayout>
      <PostList/>
    </MainLayout>
  );
};

export default LatestPostsPage;
