import { MainLayout } from "../../components/MainLayout";
import { PostForm } from "../../components/PostForm";

const CreatePostPage = () => {
  return (
    <MainLayout title="Create new post">
      <PostForm/>
    </MainLayout>
  )
};

export default CreatePostPage;