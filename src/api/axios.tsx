import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://43.200.133.96:8080/",
  withCredentials: true,
});

export default axiosInstance;
