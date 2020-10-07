const DEFAULT_ERROR_MESSAGE = 'An error occurred. Please reload browser.';

const ERROR_MESSAGES = {
  404: 'This page cannot be found.',
  405: 'Your request could be processed. Please contact Admin.'
};

/**
 * @function processError
 * @summary return default error message, custom error messages or SWAPI error
 * message
 * @param {Object} error
 * @returns {String} errorMessage
 */
export const processError = (error) => {
  const { response } = error;
  let errorMessage = DEFAULT_ERROR_MESSAGE;

  if (response) {
    errorMessage = ERROR_MESSAGES[response.status] || response.data.message;
  }
  return errorMessage;
};

/**
 * @function httpRequestHandler
 * @summary return fetch response
 * @param {Object} options
 * @returns {Object} response
 */
const httpRequestHandler = async (options) => {
  const { url, method } = options;
  const request = new Request(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
    // mode: 'cors'
  });
  const responsePromise = await fetch(request);
  const response = await responsePromise.json();
  return response;
};

/**
 * @function httpRequestHandler
 * @summary return fetch request instance
 * @param {String} url
 * @returns {Function} fetch instance
 */
export const getRequest = async url => httpRequestHandler({
  url,
  method: 'GET'
});
