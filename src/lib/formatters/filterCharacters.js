/**
 * @function filterCharacters
 * @summary return a filtered list of characters using defined filter and
 * filter value
 * @param {Array} characters - list of Star Wars film characters
 * @param {String} filter - character key to be used for filtering
 * @param {Any} filterValues - comma separated values of character key
 * @returns {Array} filteredCharacters
 */
const filterCharacters = (characters, filter, filterValues) => {
  if (!filter || !filterValues) {
    return characters;
  }
  const matchValues = filterValues.split(',');
  const filteredCharacters = characters.filter((character) => {
    const value = character[filter];
    const isMatch = value ? matchValues.includes(value) : false;
    return isMatch ? character : false;
  });
  return filteredCharacters;
};

export default filterCharacters;
