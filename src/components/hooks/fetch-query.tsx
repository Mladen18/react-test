import { getComments, getPost, getUsers, getPosts, getAllComments } from "../../services/api";

const fetchData = async (id: any) => {
  try {
    if (id != null) {
      const [postData, usersData, commentData] = await Promise.all([getPost(+id), getComments(+id), getUsers()]);
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
