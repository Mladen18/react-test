import React, { useState, useEffect } from "react";
import { Post } from "../interface/Post";
import { User } from "../interface/User";
import { Comment } from "../interface/Comment";
import CardPost from "../components/post/CardPost";
import { getComments, getPost, getUsers } from "../services/api";
import { useParams } from "react-router-dom";
import UserBlock from "../components/post/UserBlock";
import CardLayout from "../components/UI/CardLayout";
import CommentBlock from "../components/post/CommentsBlock";

const PostItem: React.FC<{}> = () => {
  const [loadPost, setLoadedPost] = useState<Post | null>(null);
  const [loadUsers, setLoadedUsers] = useState<User[] | null>(null);
  const [loadComments, setLoadedComments] = useState<Comment[] | null>(null);

  const { id } = useParams() as {
    id: string;
  };

  useEffect(() => {
    (async () => {
      if (id != null) {
        const [postData, commentData, usersData] = await Promise.all([getPost(+id), getComments(+id), getUsers()]);
        setLoadedPost(postData);
        setLoadedComments(commentData);
        setLoadedUsers(usersData);
      }
    })();
  }, [id]);

  return (
    loadPost && (
      <CardLayout className="m-auto">
        <UserBlock id={loadPost.id} users={loadUsers} userId={0} name={""} />
        <CardPost title={loadPost.title} body={loadPost.body} userId={loadPost.userId} id={loadPost.id} postId={loadPost.postId} />
        {loadComments != null && loadComments.length > 0 ? <CommentBlock comments={loadComments} id={loadPost.id} postId={0} name={""} email={""} body={""} /> : <h2>No comments found</h2>}
      </CardLayout>
    )
  );
};
export default PostItem;
