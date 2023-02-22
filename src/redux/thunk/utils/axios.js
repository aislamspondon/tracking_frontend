import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://159.203.88.74/",
});

export default axiosInstance;
