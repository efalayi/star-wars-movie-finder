/**
 * @function buildGenderFilterOptions
 * @summary build gender genderOptions for a star wars film
 * @param {Array} characters - Star Wars film characters
 * @returns {Array} genderfilterOptions
 */
const buildGenderFilterOptions = (characters) => {
  const initialGenderOption = [{ id: 'all', value: 'all', label: 'all' }];
  const genderOptions = characters.reduce((accumulator, currentCharacter) => {
    const { gender, id } = currentCharacter;
    let options = accumulator;

    // check if option already exists in accumulator
    const optionIndex = options.findIndex(item => item.label === gender);
    if (optionIndex === -1) {
      const genderOption = [{ id, value: gender, label: gender }];
      options = options.concat(genderOption);
    }
    return options;
  }, initialGenderOption);

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
