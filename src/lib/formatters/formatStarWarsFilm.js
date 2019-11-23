/**
 * @function formatStarWarsFilm
 * @summary formats Stars Wars film and appends film characters
 * @param {Object} film - Star Wars film
 * @param {Array} filmCharacters - an array of Star Wars film charcters
 * @return {Object} starWarsFilm - a formatted Star Wars film object
 */
const formatStarWarsFilm = (film, filmCharacters) => {
  const starWarsFilm = {
    created: film.created,
    director: film.director,
    edited: film.edited,
    episodeId: film.episode_id,
    openingCrawl: film.opening_crawl,
    planets: film.planets,
    producer: film.producer,
    releaseDate: film.release_date,
    species: film.species,
    starships: film.starships,
    title: film.title,
    url: film.url,
    vehicles: film.vehicles,
    characters: filmCharacters
  };

  return starWarsFilm;
};

export default formatStarWarsFilm;
