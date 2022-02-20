import React, { useEffect, useState } from "react";
// import { useQuery, UseQueryResult } from "react-query";
import { Post, User, Comment } from "../interface/index";
import logCompName from "../helper/logCompName";
// import fetchData from "../components/hooks/fetch-query";
import Search from "../components/search/Search";
import styles from "./PostList.module.css";
import CardPost from "../components/post/CardPost";
import UserBlock from "../components/post/UserBlock";
import CardLayout from "../components/UI/CardLayout";
import CommentBlock from "../components/post/CommentBlock";
import { Link } from "react-router-dom";
import { useData } from "../context/context";

interface AllData {
  data: [Post[], User[], Comment[]] | undefined;
  status: string;
}

const PostsList: React.FC<{ message: string }> = ({ message }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  // Log Message props
  const componentName: string = "Posts List";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  // Call query
  // const { data, status }: UseQueryResult<All> = useQuery(["data", null], () => fetchData(null, "2"));

  // USe context
  const { data, status }: AllData = useData();

  let loadPosts: Post[] = data ? data[0] : [];
  let loadUsers: User[] = data ? data[1] : [];
  let loadComments: Comment[] = data ? data[2] : [];

  // Search handler value
  const searchHandler = (value: string): string => {
    setSearchValue(value);
    return value;
  };

  // Filter posts
  const filteredPosts = (loadPosts ? loadPosts : []).filter((post: Post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  // RETURN CONTENT
  return (
    <section className={styles.posts}>
      <Search searchHandler={searchHandler} message={message} />
      <div className={styles.postList}>
        <ul className={styles.postList__items}>
          {status === "loading" && <h1>Loading...</h1>}
          {status === "error" && <h1>Error</h1>}
          {status === "success" &&
            // eslint-disable-next-line array-callback-return
            (loadPosts.length > 0 && filteredPosts.length > 0 ? (
              (searchValue === "" ? loadPosts : filteredPosts).map(
                (item: { id: number; title: string; body: string }) => (
                  <li className={styles.postList__item} key={item.id}>
                    <Link to={`/post/${item.id}`} className={styles.postList__link}>
                      <CardLayout className={""} message={message}>
                        <UserBlock id={item.id} users={loadUsers} message={message} />
                        <CardPost title={item.title} body={item.body} message={message} />
                        <CommentBlock id={item.id} comments={loadComments} message={message} />
                      </CardLayout>
                    </Link>
                  </li>
                )
              )
            ) : (
              <h1>No posts found</h1>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default PostsList;
