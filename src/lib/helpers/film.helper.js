/**
 * @function convertFromCmToFeet
 * @summary convert height value to ft
 * @param {Number} height
 * @return {Array} [feetValue, remainder]
 */
export const convertFromCmToFeet = (height) => {
  const FT_CONSTANT = 30.48;
  const computedValue = height / FT_CONSTANT;
  const feetValue = Math.floor(height / FT_CONSTANT);
  const remainder = computedValue - feetValue;
  return [feetValue, remainder];
};

/**
 * @function convertFromFtToInch
 * @summary convert height value to inch
 * @param {Number} height
 * @return {Number} convertedHeight
 */
export const convertFromFtToInch = (height) => {
  const INCH_CONSTANT = 12;
  const computedHeight = height * INCH_CONSTANT;
  const inchValue = Number.parseFloat(computedHeight.toFixed(2));
  return inchValue;
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

  const [feetValue, remainder] = convertFromCmToFeet(sumOfHeights);

  return {
    cm: sumOfHeights,
    ft: feetValue,
    inch: convertFromFtToInch(remainder)
  };
};
