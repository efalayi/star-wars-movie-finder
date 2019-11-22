/**
 * @function buildFilmCharacterList
 * @summary build character list for a star wars film
 * @param {Array} promiseList - an array of API response
 * @returns {Array} characterList
 */
const buildFilmCharacterList = (promiseList) => {
  const characterList = promiseList.map((item) => {
    const { data } = item;
    return {
      name: data.name,
      gender: data.gender,
      height: data.height
    };
  });
  return characterList;
};

export default buildFilmCharacterList;
