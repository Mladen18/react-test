import { Post } from "../interface/Post";
import { Comment } from "../interface/Comment";
import { User } from "../interface/User";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async (): Promise<Post[]> => {
  const r = await fetch(`${API_URL}/posts`);
  return await r.json();
};

export const getPost = async (id: number | string): Promise<Post> => {
  const r = await fetch(`${API_URL}/posts/${id}`);
  return await r.json();
};

export const getComments = async (id: number | string): Promise<Comment[]> => {
  const r = await fetch(`${API_URL}/posts/${id}/comments`);
  return await r.json();
};

export const getAllComments = async (): Promise<Comment[]> => {
  const r = await fetch(`${API_URL}/comments`);
  return await r.json();
};

export const getUsers = async (): Promise<User[]> => {
  const r = await fetch(`${API_URL}/users`);
  return await r.json();
};

// CREATE POST
export const createPost = async (title: string, body: string, userId: number): Promise<Post[]> => {
  const r = await fetch(`${API_URL}/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await r.json();
};
