import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://be-project-reactjs.vercel.app/api/v1",
  timeout: 15000,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosClient;
