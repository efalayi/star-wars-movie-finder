import { getResource } from './request';
import buildFilmOptionList from '@/lib/adapters/buildFilmOptionList';

const BASE_URL = process.env.VUE_APP_SWAPI_BASE_URL;

export async function getAllFilms() {
  const url = `${BASE_URL}films`;
  let apiError = null;
  let films = null;
  let filmOptionList = [];

  try {
    const { data } = await getResource(url);
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
