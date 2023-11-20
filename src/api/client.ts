import { baseUrl } from './endpoints';
import axios from 'axios';


const client = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
});


client.interceptors.request.use(
  (config) => {
    return config;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);

client.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);

export default client;
