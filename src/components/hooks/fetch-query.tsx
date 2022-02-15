import { getComments, getPost, getUsers, getPosts, getAllComments } from "../../services/api";

const fetchData = async (id: number | null) => {
  try {
    if (id != null) {
      const [postData, usersData, commentData] = await Promise.all([getPost(+id), getComments(+id), getUsers()]);
      return [postData, usersData, commentData];
      // const allPostData = await getPost(id);
      // const allUserData = await getUsers();
      // const allCommentData = await getComments(id);
      // return { allPostData, allUserData, allCommentData };
    } else {
      const [postData, usersData, commentData] = await Promise.all([getPosts(), getUsers(), getAllComments()]);
      return [postData, usersData, commentData];
      // const postData = await getPosts();
      // const usersData = await getUsers();
      // const commentData = await getAllComments();
      // return { postData, usersData, commentData };
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
