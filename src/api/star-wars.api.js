import axios from 'axios';
import buildFilmCharacterList from '@/lib/adapters/buildFilmCharacterList';
import buildFilmOptionList from '@/lib/adapters/buildFilmOptionList';
import formatStarWarsFilm from '@/lib/formatters/formatStarWarsFilm';
import sortFilmsByReleaseDate from '@/lib/formatters/sortFilmsByReleaseDate';
import { processError } from './request';
import END_POINTS from './endpoints';

// const SWAPI_BASE_URL = process.env.VUE_APP_SWAPI_BASE_URL;

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
    return axios.get(url);
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
    const { data } = await axios.get(END_POINTS.getFilms);
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
 * @function getFilm
 * @param {String} filmUrl - url of Star Wars film
 * @returns {Object} - object containg film, and apiError
 */
export async function getFilm(filmUrl) {
  const url = removeEndSlash(filmUrl);
  let apiError = null;
  let film = null;

  try {
    const { data } = await axios.post(url);
    const filmCharacters = await getStarWarsFilmCharacters(data.characters);
    film = formatStarWarsFilm(data, filmCharacters);
  } catch (error) {
    apiError = processError(error);
  }

  return {
    film,
    apiError
  };
}
