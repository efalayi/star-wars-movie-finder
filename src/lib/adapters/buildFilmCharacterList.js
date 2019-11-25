/**
 * @function buildFilmCharacterList
 * @summary build character list for a star wars film
 * @param {Array} promiseList - an array of API response
 * @returns {Array} characterList
 */
const buildFilmCharacterList = (promiseList) => {
  const characterList = promiseList.map((item) => {
    const { data } = item;
    const height = Number.parseInt(data.height, 10);
    const isValidHeightValue = Number.isNaN(height);
    return {
      id: `${data.name}-${data.birth_year}`,
      name: data.name,
      gender: data.gender,
      height: isValidHeightValue ? data.height : height
    };
  });
  return characterList;
};

export default buildFilmCharacterList;
