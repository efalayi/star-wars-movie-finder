/**
 * @function buildFilmCharacterList
 * @summary build character list for a star wars film
 * @param {Array} promiseList - an array of API response
 * @returns {Array} characterList
 */
const buildFilmCharacterList = (promiseList) => {
  const characterList = promiseList.map((item) => {
    const height = Number.parseInt(item.height, 10);
    const isValidHeightValue = Number.isNaN(height);
    return {
      id: `${item.name}-${item.birth_year}`,
      name: item.name,
      gender: item.gender,
      height: isValidHeightValue ? item.height : height
    };
  });
  return characterList;
};

export default buildFilmCharacterList;
