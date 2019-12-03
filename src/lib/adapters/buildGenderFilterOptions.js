/**
 * @function buildGenderFilterOptions
 * @summary build gender genderOptions for a star wars film
 * @param {Array} characters - Star Wars film characters
 * @returns {Array} genderfilterOptions
 */
const buildGenderFilterOptions = (characters) => {
  const initialGenderOption = [{ id: 'all', value: 'all', label: 'All' }];
  const genderOptions = characters.reduce((accumulator, currentCharacter) => {
    const { gender, id } = currentCharacter;

    // check if option already exists in accumulator
    const optionIndex = accumulator.findIndex(item => item.label === gender);
    if (optionIndex === -1) {
      accumulator.push({
        id,
        value: gender,
        label: gender
      });
    }
    return accumulator;
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
