const DEFAULT_ERROR_MESSAGE = 'Your request could not be processed. Please try again later';

/**
 * @function request
 * @summary returns HTTP promise
 * @param {Object} options - request options
 * @returns {Promise} - HTTP promise
 */
const request = (options) => {
  const { url, method } = options;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // xhr.withCredentials = true;
    // xhr.setRequestHeader('x-rapidapi-host', 'SwapistefanskliarovV1.p.rapidapi.com');
    // xhr.setRequestHeader('x-rapidapi-key', 'd8c1d233f3mshd9fb14a3dccf9dep14d383jsn1f299671292f');
    // xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.open(method, url);
    xhr.onload = () => {
      const response = { code: xhr.status, data: JSON.parse(xhr.response) };
      console.log('resolved: ', response);
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
    xhr.send();
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
