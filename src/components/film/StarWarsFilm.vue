<template>
  <div v-if="loading">
    <loader loadingText="loading star wars film"></loader>
  </div>
  <div v-else-if="currentFilm" class="film">
    <scrolling-text v-if="hasOpeningCrawl">
      <h6>{{ film.openingCrawl }}</h6>
    </scrolling-text>
    <gender-filter
      v-model="selectedGenderOption"
      :filterOptions="createGenderOptions()"
      v-on:update:genderOption="handleGenderOptionChange"></gender-filter>
    <film-characters-table
      :characters="filmCharacters"
      :sortColumn="sortColumn">
    </film-characters-table>
  </div>
</template>

<script>
import buildGenderFilterOptions from '@/lib/adapters/buildGenderFilterOptions';
import filterCharacters from '@/lib/formatters/filterCharacters';
import sortFilmCharacters from '@/lib/formatters/sortFilmCharacters';
import Loader from '../Loader';
import ScrollingText from '../ScrollingText';
import FilmCharactersTable from './FilmCharactersTable';
import GenderFilter from './GenderFilter';

export default {
  name: 'StarWarsFilm',
  components: {
    FilmCharactersTable,
    GenderFilter,
    Loader,
    ScrollingText
  },
  props: {
    loading: Boolean,
    film: Object
  },
  data() {
    return {
      genderOption: '',
      filmCharacters: []
    };
  },
  computed: {
    currentFilm() {
      const { film } = this;
      const characters = film ? film.characters : [];
      this.setGenderOption('all');
      this.setFilmCharacters(characters);
      return film;
    },
    hasOpeningCrawl() {
      const { film } = this;
      const openingCrawl = film ? film.openingCrawl : '';
      return Boolean(openingCrawl);
    },
    selectedGenderOption: {
      get() {
        return this.genderOption;
      },
      set(newValue) {
        this.genderOption = newValue;
      }
    }
  },
  methods: {
    createGenderOptions() {
      const { film } = this;
      if (film) {
        const genderOptions = buildGenderFilterOptions(film.characters);
        return genderOptions;
      }
      return null;
    },
    filterFilmCharacters() {
      const { film, genderOption } = this;
      const characters = film ? film.characters : [];
      const filterValue = genderOption === 'all' ? null : genderOption;
      const filmCharacters = filterCharacters(characters, 'gender', filterValue);
      this.filmCharacters = filmCharacters;
    },
    setGenderOption(gender) {
      const option = gender || 'all';
      this.genderOption = option;
    },
    setFilmCharacters(characters) {
      this.filmCharacters = characters;
    },
    handleGenderOptionChange(option) {
      this.setGenderOption(option);
      this.filterFilmCharacters();
    },
    sortColumn({ column, order }) {
      const { filmCharacters } = this;
      const sortedCharacters = sortFilmCharacters(filmCharacters, column.value, order);
      this.filmCharacters = sortedCharacters;
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/components/film";
</style>
