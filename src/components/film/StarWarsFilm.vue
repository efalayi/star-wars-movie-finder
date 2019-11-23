<template>
  <div v-if="loading">
    <span>loading star wars film</span>
  </div>
  <div v-else-if="film" class="w-100">
    <div v-if="hasOpeningCrawl" class="scrolling-text">
      <h4>{{ film.openingCrawl }}</h4>
    </div>
    <div>
      <film-characters-table
        :characters="filmCharacters">
      </film-characters-table>
    </div>
  </div>
  <!-- <div class="w-100">
    <film-characters-table
      :characters="filmCharacters"></film-characters-table>
  </div> -->
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
