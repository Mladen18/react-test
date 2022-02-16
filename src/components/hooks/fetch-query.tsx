import { Post, User, Comment } from "../../interface";
import { getComments, getPost, getUsers, getPosts, getAllComments } from "../../services/api";

const fetchData = async (id: number | null): Promise<(Post | Post[] | Comment[] | User[])[] | undefined> => {
  try {
    if (id != null) {
      const [postData, usersData, commentData] = await Promise.all([getPost(+id), getUsers(), getComments(+id)]);
      return [postData, usersData, commentData];
    } else {
      const [postData, usersData, commentData] = await Promise.all([getPosts(), getUsers(), getAllComments()]);
      return [postData, usersData, commentData];
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
