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
    <div v-if="hasOpeningCrawl" class="scrolling-text text-center">
      <h4>{{ film.openingCrawl }}</h4>
    </div>
    <gender-filter
      :selectedOption="genderOption"
      @change="handleGenderOptionChange"></gender-filter>
    <film-characters-table
      :characters="filmCharacters">
    </film-characters-table>
  </div>
</template>

<script>
import filterCharacters from '@/lib/formatters/filterCharacters';
import FilmCharactersTable from './FilmCharactersTable';
import GenderFilter from './GenderFilter';
import Loader from '../Loader';

export default {
  name: 'StarWarsFilm',
  components: {
    FilmCharactersTable,
    GenderFilter,
    Loader
  },
  props: {
    loading: Boolean,
    film: Object
  },
  data() {
    return {
      genderOption: 'all'
    };
  },
  computed: {
    filmCharacters() {
      const { film, genderOption } = this;
      const characters = film ? film.characters : [];
      const filterValue = genderOption === 'all' ? null : genderOption;
      const filteredCharacters = filterCharacters(characters, 'gender', filterValue);
      return filteredCharacters;
    },
    hasOpeningCrawl() {
      const { film } = this;
      const openingCrawl = film ? film.openingCrawl : '';
      return Boolean(openingCrawl);
    }
  },
  beforeUpdate() {
    if (this.loading) {
      this.genderOption = 'all';
    }
  },
  methods: {
    handleGenderOptionChange(option) {
      this.genderOption = option;
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/components/film";
</style>
