import axios from "axios";
import responseInterceptor from "./responseInterceptor";
import requestInterceptor from "./requestInterceptor";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

responseInterceptor(axiosInstance);
requestInterceptor(axiosInstance);

export default axiosInstance;
