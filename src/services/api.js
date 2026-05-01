import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
   "http://localhost:5000/api";

const API = axios.create({
  baseURL: BASE_URL,
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