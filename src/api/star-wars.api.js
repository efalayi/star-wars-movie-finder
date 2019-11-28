import buildFilmCharacterList from '@/lib/adapters/buildFilmCharacterList';
import buildFilmOptionList from '@/lib/adapters/buildFilmOptionList';
import formatStarWarsFilm from '@/lib/formatters/formatStarWarsFilm';
import sortFilmsByReleaseDate from '@/lib/formatters/sortFilmsByReleaseDate';
import { getRequest, processError } from './request';
import END_POINTS from './endpoints';

const removeEndSlash = (text) => {
  const endsWithForwardSlash = text.endsWith('/');
  if (endsWithForwardSlash) {
    const formattedText = text.substring(0, text.length - 1);
    return formattedText;
  }
  return text;
};

/**
 * @function getStarWarsFilmCharacters
 * @summary return a formatted list of characters for a Star Wars film
 * @param {Array} characterUrls - array of urls for characters in a Star Wars
 * film
 * @returns
 */
export async function getStarWarsFilmCharacters(characterUrls) {
  const requests = characterUrls.map((characterUrl) => {
    const url = removeEndSlash(characterUrl);
    return getRequest(url);
  });
  try {
    const resolvedPromises = await Promise.all(requests);
    const filmCharacters = buildFilmCharacterList(resolvedPromises);
    return filmCharacters;
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * @function getAllFilms
 * @summary gets all films from SWAPI
 * @returns {Object} - object containg films, filmOptionList, and apiError
 */
export async function getAllFilms() {
  let apiError = null;
  let films = null;
  let filmOptionList = [];

  try {
    const data = await getRequest(END_POINTS.getFilms);
    films = sortFilmsByReleaseDate(data.results, 'asc');
    filmOptionList = buildFilmOptionList(films);
  } catch (error) {
    apiError = processError(error);
  }

  return {
    films,
    filmOptionList,
    apiError
  };
}

/**
 * @function getFilmByUrl
 * @param {String} filmUrl - url of Star Wars film
 * @returns {Object} - object containg film, and apiError
 */
export async function getFilmByUrl(filmUrl) {
  const url = removeEndSlash(filmUrl);
  let apiError = null;
  let film = null;

  try {
    const response = await getRequest(url);
    const filmCharacters = await getStarWarsFilmCharacters(response.characters);
    film = formatStarWarsFilm(response, filmCharacters);
  } catch (error) {
    apiError = processError(error);
  }

  return {
    film,
    apiError
  };
}
