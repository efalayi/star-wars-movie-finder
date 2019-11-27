
/**
 * @summary constant representing non-binary genders
 * @see https://en.wikipedia.org/wiki/Non-binary_gender
 */
const NON_BINARY = ['hermaphrodite', 'n/a', 'none', 'unknown'];

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
    const isNonBinary = NON_BINARY.includes(gender.toLowerCase());
    const characterGender = isNonBinary ? 'Non-Binary' : gender;
    const genderKeyExists = filterKeys.includes(characterGender);

    if (!genderKeyExists) {
      const genderOption = isNonBinary ? {
        id: 'non-binary',
        value: NON_BINARY.toString(),
        label: 'Non-Binary'
      } : {
        id: character.id,
        value: gender,
        label: gender
      };
      options.push(genderOption);
      filterKeys.push(characterGender);
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
