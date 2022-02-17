import { Post, User, Comment } from "../../interface";
import { getComments, getPost, getUsers, getPosts, getAllComments } from "../../services/api";

const fetchData = async (
  id: number | null,
  name: string
): Promise<(Post | Post[] | User[] | Comment[])[] | undefined> => {
  switch (name) {
    case "1":
      const [postData, userData, commentData] = await Promise.all([
        getPost(id ? +id : null),
        getUsers(),
        getComments(id ? +id : null),
      ]);
      return [postData, userData, commentData];
    case "2":
      const [postsData, usersData, commentsData] = await Promise.all([getPosts(), getUsers(), getAllComments()]);
      return [postsData, usersData, commentsData];

    default:
      console.log("Error");
  }
  // try {
  //   if (id != null) {
  //     const [postData, usersData, commentData] = await Promise.all([getPost(+id), getUsers(), getComments(+id)]);
  //     return [postData, usersData, commentData];
  //   } else {
  //     const [postData, usersData, commentData] = await Promise.all([getPosts(), getUsers(), getAllComments()]);
  //     return [postData, usersData, commentData];
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
};

export default fetchData;
