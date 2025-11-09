import axios from "axios";

import { API_KEY, BASE_URL } from "../constants/app_constants";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = API_KEY;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["x-api-key"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // optional: handle refresh token flow here
    }
    return Promise.reject(error);
  }
);

export default api;
