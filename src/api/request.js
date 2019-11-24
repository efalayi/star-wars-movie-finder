import axios from 'axios';

const RAPID_API_BASE_URL = process.env.VUE_APP_RAPID_API_BASE_URL;
const RAPID_API_KEY = process.env.VUE_APP_RAPID_API_KEY;
const RAPID_API_HOST = process.env.VUE_APP_RAPID_API_HOST;

const DEFAULT_ERROR_MESSAGE = 'An error occurred. Please reload browser.';

const ERROR_MESSAGES = {
  404: 'This page cannot be found.',
  405: 'Your request could be processed. Please contact Admin.'
};

const axiosInstance = axios.create({
  baseURL: RAPID_API_BASE_URL,
  headers: {
    'x-rapidapi-host': RAPID_API_HOST,
    'x-rapidapi-key': RAPID_API_KEY,
    'content-type': 'application/x-www-form-urlencoded'
  }
});

export const processError = (error) => {
  const { response } = error;
  const errorMessage = ERROR_MESSAGES[response.status] || response.data.message;
  return errorMessage || DEFAULT_ERROR_MESSAGE;
};

export default axiosInstance;
