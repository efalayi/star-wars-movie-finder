/**
 * @function convertHeightToFeetValue
 * @summary convert height value to ft
 * @param {Number} height
 * @return {Number} convertedHeight
 */
export const convertHeightToFeetValue = (height) => {
  const FT_CONSTANT = 30.48;
  return Math.floor(height / FT_CONSTANT);
};

/**
 * @function convertHeightToInchValue
 * @summary convert height value to inch
 * @param {Number} height
 * @return {Number} convertedHeight
 */
export const convertHeightToInchValue = (height) => {
  const INCH_CONSTANT = 2.54;
  return Math.floor(height / INCH_CONSTANT);
};

/**
 * @function sumOfCharacterHeights
 * @summary
 * @param {Array} filmCharacters
 * @returns {Number} sumOfHeights
 */
export const sumOfCharacterHeights = (filmCharacters) => {
  const initialValue = 0;

  const sumOfHeights = filmCharacters.reduce((accumulator, currentValue) => {
    const { height } = currentValue;
    const convertedNumber = Number.parseInt(height, 10);
    const isInvalidInteger = Number.isNaN(convertedNumber);
    const currentHeight = isInvalidInteger ? 0 : convertedNumber;
    return accumulator + currentHeight;
  }, initialValue);

  return {
    cm: sumOfHeights,
    ft: convertHeightToFeetValue(sumOfHeights),
    inch: convertHeightToInchValue(sumOfHeights)
  };
};
