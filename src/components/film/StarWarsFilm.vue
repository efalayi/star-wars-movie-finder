<template>
  <div v-if="loading">
    <loader loadingText="loading star wars film"></loader>
  </div>
  <div
    v-else-if="film"
    :class="{
      'film': true,
      'animated': true,
      'slower': true,
      'slideInUp': true
    }">
    <scrolling-text v-if="hasOpeningCrawl">
      <h6>{{ film.openingCrawl }}</h6>
    </scrolling-text>
    <gender-filter
      :filterOptions="genderFilterOptions"
      :selectedOption="genderOption"
      @change="handleGenderOptionChange"></gender-filter>
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
      genderOption: 'all',
      filteredCharacters: [],
      genderOptions: []
    };
  },
  computed: {
    filmCharacters: {
      get() {
        return this.filteredCharacters;
      },
      set(newValue) {
        this.filteredCharacters = newValue;
      }
    },
    hasOpeningCrawl() {
      const { film } = this;
      const openingCrawl = film ? film.openingCrawl : '';
      return Boolean(openingCrawl);
    },
    genderFilterOptions: {
      get() {
        return this.genderOptions;
      },
      set(value) {
        this.genderOptions = value;
      }
    }
  },
  watch: {
    film(nextValue, prevValue) {
      const prevFilmTitle = prevValue ? prevValue.title : '';
      const nextFilmTitle = nextValue ? nextValue.title : '';

      if (nextFilmTitle !== prevFilmTitle) {
        this.setGenderOptions();
        this.filterFilmCharacters();
        this.genderOption = 'all';
      }
    },
    genderOption(nextValue, prevValue) {
      if (nextValue !== prevValue) {
        this.filterFilmCharacters();
      }
    }
  },
  beforeUpdate() {
    if (this.loading) {
      this.genderOption = 'all';
    }
  },
  methods: {
    filterFilmCharacters() {
      const { film, genderOption } = this;
      const characters = film ? film.characters : [];
      const filterValue = genderOption === 'all' ? null : genderOption;
      const filteredCharacters = filterCharacters(characters, 'gender', filterValue);
      this.filteredCharacters = filteredCharacters;
    },
    handleGenderOptionChange(option) {
      this.genderOption = option;
    },
    setGenderOptions() {
      const { film } = this;
      this.genderOptions = buildGenderFilterOptions(film.characters);
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
