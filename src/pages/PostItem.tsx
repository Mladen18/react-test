import React, { useEffect } from "react";
import { Post, User, Comment } from "../interface/index";
import CardPost from "../components/post/CardPost";
import UserBlock from "../components/post/UserBlock";
import CardLayout from "../components/UI/CardLayout";
import { useParams } from "react-router-dom";
import logCompName from "../helper/logCompName";
// import useFetch from "../components/hooks/use-fetch";
import fetchData from "../components/hooks/fetch-query";
import { useQuery, UseQueryResult } from "react-query";
import style from "./PostItem.module.scss";
import CommentBlock from "../components/post/CommentBlock";

interface All {
  0: Post;
  1: User[];
  2: Comment[];
}

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
  // const { isLoading, loadPost, loadComments, loadUsers } = useFetch(+id);

  const { data, status }: UseQueryResult<All> = useQuery(["post", id], () => fetchData(+id, "1"));
  const loadPost: Post = data ? data[0] : { id: 0, title: "", body: "", userId: 0 };
  const loadUsers: User[] = data ? data[1] : [];
  const loadComments: Comment[] = data ? data[2] : [];

  return (
    <React.Fragment>
      {status === "loading" && <h1>Loading...</h1>}
      {status === "error" && <h1>Error</h1>}
      {status === "success" && loadPost && (
        <CardLayout className={style.auto} message={message}>
          <UserBlock id={loadPost.id} users={loadUsers} message={message} />
          <CardPost title={loadPost.title} body={loadPost.body} message={message} />
          {loadComments != null && loadComments.length > 0 ? (
            <CommentBlock comments={loadComments} id={null} message={message} />
          ) : (
            <h2>No comments found</h2>
          )}
        </CardLayout>
      )}
    </React.Fragment>
  );
};
export default PostItem;
