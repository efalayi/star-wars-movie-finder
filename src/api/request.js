import axios from 'axios';

const RAPID_API_BASE_URL = process.env.VUE_APP_RAPID_API_BASE_URL;
const RAPID_API_KEY = process.env.VUE_APP_RAPID_API_KEY;
const RAPID_API_HOST = process.env.VUE_APP_RAPID_API_HOST;

const axiosInstance = axios.create({
  baseURL: RAPID_API_BASE_URL,
  headers: {
    'x-rapidapi-host': RAPID_API_HOST,
    'x-rapidapi-key': RAPID_API_KEY,
    'content-type': 'application/x-www-form-urlencoded'
  }
});

export default axiosInstance;
