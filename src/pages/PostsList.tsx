import React, { useState, useEffect } from "react";
import { Post } from "../interface/index";
import { Link } from "react-router-dom";
import CardPost from "../components/post/CardPost";
import Search from "../components/search/Search";
import CommentsBlock from "../components/post/CommentsBlock";
import UserBlock from "../components/post/UserBlock";
import CardLayout from "../components/UI/CardLayout";
import logCompName from "../helper/logCompName";
import styles from "./PostList.module.scss";
import useFetch from "../components/hooks/use-fetch";

const PostsList: React.FC<{ message: string }> = ({ message }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  // Log Message props
  const componentName: string = "Posts List";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  // Call custom hook
  const { isLoading, loadedPosts, loadUsers } = useFetch(null);

  // Search handler value
  const searchHandler = (value: string): any => {
    setSearchValue(value);
  };

  // Filter posts
  let filteredPosts = loadedPosts.filter((post: Post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  // RETURN CONTENT
  let postList = <h1>No posts found!</h1>;

  if ((loadedPosts.length > 0 || filteredPosts.length) > 0 && !isLoading) {
    postList = (
      <div className={styles.postList}>
        <ul className={styles.postList__items}>
          {(searchValue === "" ? loadedPosts : filteredPosts).map((item: Post) => (
            <li className={styles.postList__item} key={item.id}>
              <Link to={`/post/${item.id}`} className={styles.postList__link}>
                <CardLayout className={""} message={message}>
                  <UserBlock id={item.id} users={loadUsers} message={message} />
                  <CardPost title={item.title} body={item.body} message={message} />
                  <CommentsBlock id={item.id} message={message} />
                </CardLayout>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  let content = postList;

  if (isLoading) {
    content = <h1>Loading ...</h1>;
  }

  return (
    <section className={styles.posts}>
      <Search searchHandler={searchHandler} message={message} />
      {content}
    </section>
  );
};

export default PostsList;
