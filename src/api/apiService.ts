import axios from 'axios';
import type { User } from "@ts/interfaces";
import { useStorage } from "vue3-storage";
const storage = useStorage();

// @ts-ignore
// Question: is there anything I can do to make it the error go away?
const token = storage.getStorageSync('chocolate-store-auth') || null;

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PATCH, PUT'
  }
});

if (token) {
  // @ts-ignore
  axiosClient.headers.Authorization = token;
}

axiosClient.interceptors.request.use((request) => {
  console.log('interceptors request: ', request);
  return request;
}, (error) => {
  console.log('interceptors request error: ', error.message);
  return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
  console.log('interceptors response: ', response);
  return response.data;
}, (error) => {
  console.log('interceptors response error: ', error.message);
  console.log(`code: ${error.response.status}, data: ${error.response.data}`);
  return Promise.reject(error);
});

const apiMethods = {
  users: {
    signup: (body: User) => axiosClient.post('/auth/signup', body),
    signIn: (body: { email: string, password: string}) => axiosClient.post('/auth/signin', body),
    getProfileInfo: () => axiosClient.get(`/users/me`),
    logout: () => {
      // @ts-ignore
      storage.removeStorageSync('chocolate-store-auth');
    }
  },
  products: {

  },
  orders: {

  }
};

export { apiMethods, axiosClient };
