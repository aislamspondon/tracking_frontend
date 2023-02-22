import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://159.203.88.74:8080/",
});

export default axiosInstance;
