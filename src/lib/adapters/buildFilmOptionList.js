/**
 * @function buildFilmOptionList
 * @summary return a formatted list containing props for input select component
 * @see src/components/form/select/InputSelect.vue
 * @param {Array} films - an array of star wars films
 * @returns {Array} filmOptions - formatted list for input select component
 */
const buildFilmOptionList = (films) => {
  const filmOptions = [];

  films.forEach((film) => {
    filmOptions.push({
      value: film.url,
      label: film.title,
      primaryText: film.title,
      secondaryText: film.release_date
    });
  });
  return filmOptions;
};

export default buildFilmOptionList;
