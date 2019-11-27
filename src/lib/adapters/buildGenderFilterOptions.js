/**
 * @function buildGenderFilterOptions
 * @summary build gender options for a star wars film
 * @param {Array} characters - Star Wars film characters
 * @returns {Array} filterOptions
 */
const buildGenderFilterOptions = (characters) => {
  const filterKeys = ['all'];
  const filterOptions = [{ id: 'all', value: 'all', label: 'All' }];

  characters.forEach((character) => {
    const { gender } = character;
    const genderKeyExists = filterKeys.includes(gender);
    if (!genderKeyExists) {
      filterOptions.push({
        id: character.id,
        value: gender,
        label: gender
      });
      filterKeys.push(gender);
    }
  });
  return filterOptions;
};

export default buildGenderFilterOptions;
