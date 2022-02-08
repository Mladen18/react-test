import React, { useState, useEffect, useRef } from "react";
import { Post } from "../interface/Post";
import { User } from "../interface/User";
import { Link } from "react-router-dom";
import CardPost from "../components/post/CardPost";
import { getPosts, getUsers } from "../services/api";
import Search from "../components/search/Search";
import CommentsBlock from "../components/post/CommentsBlock";
import UserBlock from "../components/post/UserBlock";
import CardLayout from "../components/UI/CardLayout";
import logCompName from "../helper/logCompName";
import "./postlist.css";

const PostsList: React.FC<{ message: string }> = ({ message }) => {
  const [loadedPosts, setLoadedPosts] = useState<Post[]>([]);
  const [loadUsers, setLoadedUsers] = useState<User[] | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const componentMounted = useRef(true);

  const componentName: string = "Posts List";

  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  useEffect(() => {
    if (componentMounted.current) {
      (async () => {
        try {
          const [postData, usersData] = await Promise.all([getPosts(), getUsers()]);
          setLoadedPosts(postData);
          setLoadedUsers(usersData);
        } catch (error) {
          console.log(error);
        }
      })();
    }
    return () => {
      componentMounted.current = false;
    };
  }, []);

  const searchHandler = (value: string): any => {
    setSearchValue(value);
  };

  let filteredPosts = loadedPosts.filter((post: Post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <section className="s-posts">
      <Search searchHandler={searchHandler} message={message} />
      <div className="c-postList">
        <ul className="c-postList__items">
          {loadedPosts.length <= 0 || filteredPosts.length <= 0 ? (
            <h1>No posts found.</h1>
          ) : (
            (searchValue === "" ? loadedPosts : filteredPosts).map((item: Post) => (
              <li className="c-postList__item" key={item.id}>
                <Link to={`/post/${item.id}`} className="c-postList__link">
                  <CardLayout className={""} message={message}>
                    <UserBlock id={item.id} users={loadUsers} message={message} />
                    <CardPost title={item.title} body={item.body} userId={item.userId} id={item.id} postId={item.postId} message={message} />
                    <CommentsBlock id={item.id} message={message} />
                  </CardLayout>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default PostsList;
