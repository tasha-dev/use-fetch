// Codes by mahdi tasha
// Importing part
import axios from "axios";

// Creating and exporting axios instance as default
// Edit it as you wish
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
});

export default axiosInstance;
