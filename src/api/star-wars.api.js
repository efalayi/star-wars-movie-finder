import buildFilmOptionList from '@/lib/adapters/buildFilmOptionList';
import { postResource } from './request';
import END_POINTS from './endpoints';

const RAPID_API_BASE_URL = process.env.VUE_APP_RAPID_API_BASE_URL;

/**
 * @function getAllFilms
 * @summary gets all films from SWAPI
 * @returns {object} - object containg films, filmOptionList, and apiError
 */
export async function getAllFilms() {
  const url = `${RAPID_API_BASE_URL}${END_POINTS.getFilms}`;
  let apiError = null;
  let films = null;
  let filmOptionList = [];

  try {
    const { data } = await postResource(url);
    films = data.results;
    filmOptionList = buildFilmOptionList(data.results);
  } catch (error) {
    apiError = error;
  }

  return {
    films,
    filmOptionList,
    apiError
  };
}

export async function getAllFilmById(filmId) {
  console.log('fetching film: ', filmId);
}
