import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://vhtrackingbackend.visionarytechsolution.com/",
  
});

export default axiosInstance;
