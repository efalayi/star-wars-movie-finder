const formatFilmList = (films) => {
  console.log('films: ', films);
  const formattedFilms = [];

  films.forEach((film) => {
    const {
      characters, created, director, edited, planets, producer,
      species, starships, title, url, vehicles, ...otherProps
    } = film;
    formattedFilms.push({
      characters,
      created,
      director,
      edited,
      planets,
      producer,
      title,
      url,
      openingCrawl: otherProps.opening_crawl,
      releaseDate: otherProps.release_date
    });
  });
  return formattedFilms;
};

export default formatFilmList;
