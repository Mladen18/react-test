import { useState, useEffect } from "react";
import { Post } from "../../interface/Post";
import { User } from "../../interface/User";
import { Comment } from "../../interface/Comment";
import { getComments, getPost, getUsers, getPosts } from "../../services/api";

const useFetch = (id: number | null) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadedPosts, setLoadedPosts] = useState<Post[]>([]);
  const [loadPost, setLoadedPost] = useState<Post | null>(null);
  const [loadUsers, setLoadedUsers] = useState<User[] | null>(null);
  const [loadComments, setLoadedComments] = useState<Comment[] | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async (id: number | null) => {
    setIsLoading(true);
    try {
      if (id != null) {
        const [postData, commentData, usersData] = await Promise.all([getPost(+id), getComments(+id), getUsers()]);
        setLoadedPost(postData);
        setLoadedComments(commentData);
        setLoadedUsers(usersData);
      } else {
        const [postData, usersData] = await Promise.all([getPosts(), getUsers()]);
        setLoadedPosts(postData);
        setLoadedUsers(usersData);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return { isLoading, loadPost, loadUsers, loadComments, loadedPosts };
};

export default useFetch;
