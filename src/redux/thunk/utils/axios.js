import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://admin.vhtracking.com/",
});

export default axiosInstance;
