import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};

export const getPostById = async (id: number): Promise<Post> => {
  const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
  return response.data;
}; 