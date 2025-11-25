import axios from 'axios';
// simple axios instance with base url
// we make it seprate so that we can use it in all over the project and the code is also look like organized
const axiosInstance = axios.create({
    baseURL:'http://localhost:3000/api', // Replace with your API base URL
})
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
export default axiosInstance;

