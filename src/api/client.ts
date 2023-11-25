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
    console.error('요청 에러', error)
    return await Promise.reject(error);
  }
);


client.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error) => {
    if (error.response) {
      const status = error.response.status
      const data = error.response.data

      switch (status) {
        case 400:
          console.error('Bad Request:', data.message)
          break
        case 404:
          console.error('Not Found:', data.message)
          break
        default:
          console.error('Server Error:', data.message)
          break
      }
    } else if (error.request) {
      console.error('요청을 보냈지만 응답을 받지 못한 에러', error.message)
    } else {
      console.error('요청 만드는 도중 발생한 에러', error.message)
    }

    return await Promise.reject(error)
  }
)

export default client;
