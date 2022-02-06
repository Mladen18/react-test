import React, { useState, useEffect } from "react";
import { Post } from "../interface/Post";
import { User } from "../interface/User";
import { Link } from "react-router-dom";
import CardPost from "../components/post/CardPost";
import { getPosts, getUsers } from "../services/api";
import Search from "../components/search/Search";
import "./postlist.css";
import CommentsBlock from "../components/post/CommentsBlock";
import UserBlock from "../components/post/UserBlock";
import CardLayout from "../components/UI/CardLayout";

const PostsList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedPosts, setLoadedPosts] = useState<Post[]>([]);
  const [loadUsers, setLoadedUsers] = useState<User[] | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const [postData, usersData] = await Promise.all([getPosts(), getUsers()]);
        setLoadedPosts(postData);
        setLoadedUsers(usersData);
      } catch (error) {
        console.log(error);
      }
    })();
    setIsLoading(false);
  }, []);

  const searchHandler = (value: string): any => {
    if (value !== "") {
      console.log(filteredPosts);
      return setSearchValue(value);
    }
  };

  let filteredPosts = loadedPosts.filter((post: Post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  }, []);

  return (
    <section className="s-posts">
      <Search searchHandler={searchHandler} />
      <div className="c-postList">
        <ul className="c-postList__items">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : loadedPosts.length <= 0 || filteredPosts.length <= 0 ? (
            <h1>No posts found.</h1>
          ) : (
            (searchValue === "" ? loadedPosts : filteredPosts).map((item: Post) => (
              <li className="c-postList__item" key={item.id}>
                <Link to={`/post/${item.id}`} className="c-postList__link">
                  <CardLayout className={""}>
                    <UserBlock id={item.id} users={loadUsers} userId={0} name={""} />
                    <CardPost title={item.title} body={item.body} userId={item.userId} id={item.id} postId={item.postId} />
                    <CommentsBlock id={item.id} postId={0} name={""} email={""} body={""} comments={null} />
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
