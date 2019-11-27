/**
 * @function buildGenderFilterOptions
 * @summary build gender options for a star wars film
 * @param {Array} characters - Star Wars film characters
 * @returns {Array} filterOptions
 */
const buildGenderFilterOptions = (characters) => {
  const filterKeys = ['all'];
  const options = [{ id: 'all', value: 'all', label: 'All' }];

  characters.forEach((character) => {
    const { gender } = character;
    const genderKeyExists = filterKeys.includes(gender);
    if (!genderKeyExists) {
      options.push({
        id: character.id,
        value: gender,
        label: gender
      });
      filterKeys.push(gender);
    }
  });

  const filterOptions = [...options].sort((currentOption, nextOption) => {
    const currentValue = currentOption.value;
    const nextValue = nextOption.value;

    if (currentValue < nextValue) {
      return -1;
    }

    if (currentValue > nextValue) {
      return 1;
    }

    return 0;
  });
  return filterOptions;
};

export default buildGenderFilterOptions;
