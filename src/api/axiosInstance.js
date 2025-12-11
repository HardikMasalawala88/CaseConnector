import axios from 'axios';

// Use NEXT_PUBLIC_API_BASE_URL so the value is available on both
// client and server builds. Provide a fallback for local dev.
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000';

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    (`[Request] ${config.method?.toUpperCase()} - ${config.url}`, config.data);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(`[Error] ${error.response?.status}: ${error.message}`);
    return Promise.reject(error);
  }
);


export default axiosInstance;
