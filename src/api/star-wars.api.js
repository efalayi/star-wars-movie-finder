import Vue from 'vue';

const BASE_URL = process.env.VUE_APP_SWAPI_BASE_URL;

export async function getAllFilms() {
  console.log('fetching all movies: ', BASE_URL);
  let apiError = null;
  let films = null;

  try {
    const { data } = await Vue.axios.get(`${BASE_URL}films`);
    films = data.results;
  } catch (error) {
    console.log('error: ', error);
    apiError = error;
  }

  return {
    films,
    apiError
  };
}

export async function getAllFilmById(filmId) {
  console.log('fetching film: ', filmId);
}
