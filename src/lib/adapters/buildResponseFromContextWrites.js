/**
 * @function buildResponseFromContextWrites
 * @summary builds a response object from RapidAPI contextWrites
 * @param {Object} contextWrites - RapidAPI contextWrites
 * @param {Number} status - http response
 * @returns {Object} response - http response object containing status and data
 */
const buildResponseFromContextWrites = (contextWrites, status) => {
  const { to } = contextWrites;
  const response = {};

  if (status) response.status = status;

  if (to) {
    const [data] = to;
    response.data = data;
  }

  return response;
};

export default buildResponseFromContextWrites;
