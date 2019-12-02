/**
 * @function saveFilmToCache
 * @summary checks if currentFilm should be added to cache
 * @param {Array} cache
 * @param {Object} currentFilm
 * @returns {Boolean}
 */
const shouldUpdateCache = (cache, currentFilm) => {
  const cacheLength = cache.length;

  if (cacheLength === 0) {
    return true;
  }
  const [retrievedFilm] = cache.filter(film => film.title === currentFilm.title);
  return !retrievedFilm;
};

/**
 * @function saveFilmToCache
 * @summary save film to swapi cache
 * @param {Object} currentFilm
 */
export const saveFilmToCache = (currentFilm) => {
  const swapiCache = sessionStorage.getItem('swapi-cache');
  const cache = swapiCache ? JSON.parse(swapiCache) : [];
  const allowUpdate = shouldUpdateCache(cache, currentFilm);

  // update cache if film does not already exist in cache
  if (allowUpdate) {
    cache.push(currentFilm);
    sessionStorage.setItem('swapi-cache', JSON.stringify(cache));
  }
};

/**
 * @function getFilmFromCache
 * @summary return film saved in swapi-cahe
 * @param {String} filmTitle
 * @returns {Object|null} cachedFilm
 */
export const getFilmFromCache = (filmTitle) => {
  const swapiCache = sessionStorage.getItem('swapi-cache');
  if (swapiCache) {
    const cache = JSON.parse(swapiCache);
    const [cachedFilm] = cache.filter(film => film.title === filmTitle);
    return cachedFilm;
  }
  return null;
};

export const clearCache = () => {
  sessionStorage.removeItem('swapi-cache');
};
