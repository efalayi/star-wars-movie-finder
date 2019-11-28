/* eslint-disable import/prefer-default-export */
// import axios from 'axios';

const DEFAULT_ERROR_MESSAGE = 'An error occurred. Please reload browser.';

const ERROR_MESSAGES = {
  404: 'This page cannot be found.',
  405: 'Your request could be processed. Please contact Admin.'
};

export const processError = (error) => {
  const { response } = error;
  const errorMessage = ERROR_MESSAGES[response.status] || response.data.message;
  return errorMessage || DEFAULT_ERROR_MESSAGE;
};
