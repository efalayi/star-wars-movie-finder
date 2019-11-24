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
    <transition name="fade" :duration="1000" mode="out-in">
      <div v-if="showBrandImage" class="brand__image">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
    </transition>
    <star-wars-film
      :loading="loadingFilm"
      :film="film">
    </star-wars-film>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import InputSelect from '@/components/form/select/InputSelect';
import StarWarsFilm from '@/components/film/StarWarsFilm';
import { getAllFilms, getFilm } from '@/api/star-wars.api';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    InputSelect,
    StarWarsFilm
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
    },
    showBrandImage() {
      return !this.film;
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
