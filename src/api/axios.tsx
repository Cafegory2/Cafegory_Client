import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://baseurl",
  withCredentials: true,
});

export default axiosInstance;
