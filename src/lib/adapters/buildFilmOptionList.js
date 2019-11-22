const buildFilmOptionList = (films) => {
  const filmOptions = [];

  films.forEach((film) => {
    filmOptions.push({
      value: film.url,
      label: film.title,
      primaryText: 'jhbsdbfjdsfvdhsbfjhsdbfjsdbfjdsbhjbdjsfbdjsbfjdsbhfbdjsbfhjbjsbahjdjbsad nbjsdbfhbdfnsb nbjksdbfbjkdjfsdbfnnjdbf  jbdsfbjsbd',
      secondaryText: film.release_date
    });
  });
  return filmOptions;
};

export default buildFilmOptionList;
