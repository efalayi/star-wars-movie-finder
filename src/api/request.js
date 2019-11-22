import buildResponseFromContextWrites from '@/lib/adapters/buildResponseFromContextWrites';

const DEFAULT_ERROR_MESSAGE = 'Your request could not be processed. Please try again later';

const RAPID_API_KEY = process.env.VUE_APP_RAPID_API_KEY;
const RAPID_API_HOST = process.env.VUE_APP_RAPID_API_HOST;

/**
 * @function request
 * @summary returns HTTP promise
 * @param {Object} options - request options
 * @returns {Promise} - HTTP promise
 */
const request = (options) => {
  const { url, method } = options;
  return new Promise((resolve, reject) => {
    const data = null;

    // initialise XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open(method, url);

    // set request headers
    xhr.setRequestHeader('x-rapidapi-host', RAPID_API_HOST);
    xhr.setRequestHeader('x-rapidapi-key', RAPID_API_KEY);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.onload = () => {
      const { contextWrites } = JSON.parse(xhr.response);
      const response = buildResponseFromContextWrites(
        xhr.status, contextWrites
      );
      resolve(response);
    };
    xhr.onerror = () => {
      const response = {
        code: xhr.status,
        data: xhr.statusText || DEFAULT_ERROR_MESSAGE
      };
      console.log('rejected: ', response);
      reject(response);
    };
    xhr.send(data);
  });
};

/**
 * @function getResource
 * @summary returns HTTP promise for get request
 * @param {Object} url - API url
 * @returns {Promise} - HTTP promise
 */
export const getResource = (url) => {
  const options = {
    url,
    method: 'GET'
  };
  return request(options);
};

/**
 * @function postResource
 * @summary returns HTTP promise for post request
 * @param {Object} url - API url
 * @returns {Promise} - HTTP promise
 */
export const postResource = (url) => {
  const options = {
    url,
    method: 'POST'
  };
  return request(options);
};
