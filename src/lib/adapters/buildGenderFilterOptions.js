
/**
 * @summary constant representing non-binary genders
 * @see https://en.wikipedia.org/wiki/Non-binary_gender
 */
const NON_BINARY = ['hermaphrodite', 'n/a', 'none', 'unknown'];

/**
 * @function buildGenderFilterOptions
 * @summary build gender genderOptions for a star wars film
 * @param {Array} characters - Star Wars film characters
 * @returns {Array} genderfilterOptions
 */
const buildGenderFilterOptions = (characters) => {
  const filterKeys = ['all'];
  const genderOptions = [{ id: 'all', value: 'all', label: 'All' }];

  characters.forEach((character) => {
    const { gender } = character;
    const isNonBinary = NON_BINARY.includes(gender.toLowerCase());
    const characterGender = isNonBinary ? 'Non-Binary' : gender;
    const genderKeyExists = filterKeys.includes(characterGender);

    if (!genderKeyExists) {
      const genderOption = isNonBinary ? {
        id: 'non-binary',
        value: NON_BINARY.toString(),
        label: 'non-binary'
      } : {
        id: character.id,
        value: gender,
        label: gender
      };
      genderOptions.push(genderOption);
      filterKeys.push(characterGender);
    }
  });

  // sort gender genderOptions
  const genderfilterOptions = [...genderOptions].sort((currentOption, nextOption) => {
    const currentLabel = currentOption.label;
    const nextLabel = nextOption.label;

    if (currentLabel < nextLabel) {
      return -1;
    }

    if (currentLabel > nextLabel) {
      return 1;
    }

    return 0;
  });
  return genderfilterOptions;
};

export default buildGenderFilterOptions;
