import Vue from 'vue';
import axios from 'axios';
import buildFilmOptionList from '@/lib/adapters/buildFilmOptionList';
import buildResponseFromContextWrites from '@/lib/adapters/buildResponseFromContextWrites';
import END_POINTS from './endpoints';

// const SWAPI_BASE_URL = process.env.VUE_APP_SWAPI_BASE_URL;

/**
 * @function getAllFilms
 * @summary gets all films from SWAPI
 * @returns {object} - object containg films, filmOptionList, and apiError
 */
export async function getAllFilms() {
  let apiError = null;
  let films = null;
  let filmOptionList = [];

  try {
    const { data } = await Vue.axios.post(END_POINTS.getFilms);
    const { callback, contextWrites } = data;
    if (callback === 'error') {
      apiError = 'an error occurred';
    } else {
      const response = buildResponseFromContextWrites(contextWrites);
      films = response.data.results;
      filmOptionList = buildFilmOptionList(films);
    }
  } catch (error) {
    console.log('error: ', error);
    apiError = error;
  }

  return {
    films,
    filmOptionList,
    apiError
  };
}

export async function getFilm(filmUrl) {
  const url = filmUrl.substring(0, filmUrl.length - 1);
  let apiError = null;
  let film = null;

  try {
    const { data } = await axios.post(url);
    console.log('response: ', data);
    film = data;
  } catch (error) {
    console.log('error: ', error);
    apiError = error;
  }

  return {
    film,
    apiError
  };
}
