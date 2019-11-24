<template>
  <div v-if="loading">
    <span>loading star wars film</span>
  </div>
  <div v-else-if="film" class="w-100 animated slow slideInUp">
    <div v-if="hasOpeningCrawl" class="scrolling-text text-center">
      <h4>{{ film.openingCrawl }}</h4>
    </div>
    <film-characters-table
      :characters="filmCharacters">
    </film-characters-table>
  </div>
</template>

<script>
import FilmCharactersTable from './FilmCharactersTable';

export default {
  name: 'StarWarsFilm',
  components: {
    FilmCharactersTable
  },
  props: {
    loading: Boolean,
    film: Object
  },
  computed: {
    filmCharacters() {
      const { film } = this;
      return film ? film.characters : [];
    },
    hasOpeningCrawl() {
      const { film } = this;
      const openingCrawl = film ? film.openingCrawl : '';
      return Boolean(openingCrawl);
    }
  }
};
</script>
