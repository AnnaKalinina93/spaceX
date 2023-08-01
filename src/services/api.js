import axios from 'axios';
  
  const BACKEND_URL = 'https://api.spacexdata.com/v4';
  const REQUEST_TIMEOUT = 5000;
  
  export const createAPI = () => {
    const api = axios.create({
      baseURL: BACKEND_URL,
      timeout: REQUEST_TIMEOUT,
    });
  
    api.interceptors.response.use(
      (response) => response,
  
      (error) => Promise.reject(error),
    );
  
    api.interceptors.request.use((config) => config);
  
    return api;
  };