import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "X-Custom-Header": "foobar" },
  withCredentials: true,
});

export default axiosInstance;
