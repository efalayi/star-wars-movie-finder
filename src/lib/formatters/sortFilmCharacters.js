/**
 * @function sortFilmCharacters
 * @summary sort film characters using defined sort key
 * @param {Array} characters - an array of Star Wars film characters
 * @param {String} sortKey
 * @param {String} order - sorting format
 * @returns {Array} sortedCharacters
 */
const sortFilmCharacters = (characters, sortKey, order = 'desc') => {
  const isDescendingOrder = order === 'desc';
  console.log('sort characters: ', characters, sortKey, isDescendingOrder);
  const sortedCharacters = [...characters].sort((current, next) => {
    const currentValue = current[sortKey];
    const nextValue = next[sortKey];

    if (currentValue < nextValue) {
      return isDescendingOrder ? 1 : -1;
    }

    if (currentValue > nextValue) {
      return isDescendingOrder ? -1 : 1;
    }

    return 0;
  });
  return sortedCharacters;
};

export default sortFilmCharacters;
