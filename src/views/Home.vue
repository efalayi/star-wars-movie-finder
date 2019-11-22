<template>
  <div class="home">
    <HelloWorld msg="Star Wars Movie Finder"/>
    <input-select
      :options="filmOptionList"
      :loading="loadingFilmOptions"
      @change="handleSelectChange">
    </input-select>
    <div v-if="error">
      <h3 class="text-error">{{ error }}</h3>
    </div>
    <div v-else-if="loadingFilm">
      loading film
    </div>
    <div v-else class="brand__image">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import InputSelect from '@/components/form/select/InputSelect';
import { getAllFilms, getFilm } from '@/api/star-wars.api';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    InputSelect
  },
  data() {
    return {
      error: null,
      film: null,
      films: [],
      filmOptionList: [],
      loadingFilmOptions: false,
      loadingFilm: false
    };
  },
  computed: {
    filmsExist() {
      return this.films.length > 0;
    }
  },
  async mounted() {
    this.getAllFilms();
  },
  methods: {
    async handleSelectChange(item) {
      await this.getFilm({ url: item.value });
    },
    async getAllFilms() {
      this.loadingFilmOptions = true;
      const { films, filmOptionList, apiError } = await getAllFilms();
      if (apiError) {
        this.error = apiError;
      } else {
        this.films = films;
        this.filmOptionList = filmOptionList;
      }
      this.loadingFilmOptions = false;
    },
    async getFilm({ url }) {
      this.loadingFilm = true;
      const { film, apiError } = await getFilm(url);

      if (apiError) {
        this.error = apiError;
      } else {
        this.film = film;
      }
      this.loadingFilm = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/views/home";
</style>
