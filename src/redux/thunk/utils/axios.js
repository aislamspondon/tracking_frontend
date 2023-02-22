import axios from "./utils/axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
});

export default axiosInstance;
