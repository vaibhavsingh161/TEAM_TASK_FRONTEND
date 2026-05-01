import axios from "axios";

const API = axios.create({
  baseURL: "https://teamtask-production-5eb4.up.railway.app"
});

// attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;