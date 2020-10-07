const BASE_URL = process.env.VUE_APP_SWAPI_BASE_URL;

const END_POINTS = {
  getFilms: `https://cors-anywhere.herokuapp.com/${BASE_URL}films/`,
  getFilmById: 'getSingleFilm'
};

export default END_POINTS;
