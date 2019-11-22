/**
 * @function buildResponseFromContextWrites
 * @summary builds a response object from RapidAPI contextWrites
 * @param {Number} status - http response
 * @param {Object} contextWrites - RapidAPI contextWrites
 * @returns {Object} response - http response object containing status and data
 */
const buildResponseFromContextWrites = (contextWrites) => {
  const { to } = contextWrites;
  const response = {};

  if (to) {
    const [data] = to;
    response.data = data;
  }

  return response;
};

export default buildResponseFromContextWrites;
