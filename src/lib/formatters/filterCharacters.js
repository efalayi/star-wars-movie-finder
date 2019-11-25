/**
 * @function filterCharacters
 * @summary return a filtered list of characters using defined filter and
 * filter value
 * @param {Array} characters - list of Star Wars film characters
 * @param {String} filter - character key to be used for filtering
 * @param {Any} filterValue - value of character key
 * @returns {Array} filteredCharacters
 */
const filterCharacters = (characters, filter, filterValue) => {
  if (!filter || !filterValue) {
    return characters;
  }
  const filteredCharacters = characters.filter((character) => {
    const value = character[filter];
    const isMatch = value ? value === filterValue : false;
    return isMatch ? character : false;
  });
  return filteredCharacters;
};

export default filterCharacters;
