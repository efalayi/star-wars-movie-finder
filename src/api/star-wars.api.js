import Vue from 'vue';
import buildFilmOptionList from '@/lib/adapters/buildFilmOptionList';

const BASE_URL = process.env.VUE_APP_SWAPI_BASE_URL;
const DEFAULT_ERROR_MESSAGE = 'Your request could not be processed. Please try again later';

const getErrorMessage = (errorResponse) => {
  const error = JSON.parse(JSON.stringify(errorResponse));
  const errorMessage = error.message || DEFAULT_ERROR_MESSAGE;
  return errorMessage;
};

export async function getAllFilms() {
  let apiError = null;
  let films = null;
  let filmOptionList = [];

  try {
    const { data } = await Vue.axios.get(`${BASE_URL}films/`);
    films = data.results;
    filmOptionList = buildFilmOptionList(data.results);
  } catch (error) {
    apiError = getErrorMessage(error);
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
