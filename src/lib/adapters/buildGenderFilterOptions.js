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
    const genderKeyExists = filterKeys.includes(gender);

    if (!genderKeyExists) {
      const genderOption = {
        id: character.id,
        value: gender,
        label: gender
      };
      genderOptions.push(genderOption);
      filterKeys.push(gender);
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
