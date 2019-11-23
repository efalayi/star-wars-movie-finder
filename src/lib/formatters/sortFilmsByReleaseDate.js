/**
 * @function sortFilmsByReleaseDate
 * @summary sort films by release date
 * @param {Array} films - an array of Star Wars films
 * @param {String} order - sorting format
 * @returns {Array} sortedFilms
 */
const sortFilmsByReleaseDate = (films, order = 'desc') => {
  const isDescendingOrder = order === 'desc';
  const sortedFilms = [...films].sort((current, next) => {
    const currentFilmReleaseDate = current.release_date;
    const nextFilmReleaseDate = next.release_date;

    if (currentFilmReleaseDate < nextFilmReleaseDate) {
      return isDescendingOrder ? 1 : -1;
    }

    if (currentFilmReleaseDate > nextFilmReleaseDate) {
      return isDescendingOrder ? -1 : 1;
    }

    return 0;
  });
  return sortedFilms;
};

export default sortFilmsByReleaseDate;
