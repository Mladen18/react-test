import React, { useEffect } from "react";
import CardPost from "../components/post/CardPost";
import { useParams } from "react-router-dom";
import UserBlock from "../components/post/UserBlock";
import CardLayout from "../components/UI/CardLayout";
import CommentsBlock from "../components/post/CommentsBlock";
import logCompName from "../helper/logCompName";
import useFetch from "../components/hooks/use-fetch";

const PostItem: React.FC<{ message: string }> = ({ message }) => {
  // Log Message props
  const componentName: string = "Posts Item";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  // Get Item ID from URL
  const { id } = useParams() as {
    id: string;
  };

  // Call custom hook
  const { isLoading, loadPost, loadComments, loadUsers } = useFetch(+id);

  // RETURN CONTENT
  let postList = <h1>No posts found</h1>;

  if (loadPost) {
    postList = (
      <CardLayout className="m-auto" message={message}>
        <UserBlock id={loadPost.id} users={loadUsers} message={message} />
        <CardPost title={loadPost.title} body={loadPost.body} userId={loadPost.userId} id={loadPost.id} postId={loadPost.postId} message={message} />
        {loadComments != null && loadComments.length > 0 ? <CommentsBlock id={loadPost.id} message={message} /> : <h2>No comments found</h2>}
      </CardLayout>
    );
  }

  let content = postList;

  if (isLoading) {
    content = <h1>Loading ...</h1>;
  }

  return content;
};
export default PostItem;
