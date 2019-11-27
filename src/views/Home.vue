<template>
  <div class="home">
    <input-select
      :options="filmOptionList"
      :loading="loadingFilmOptions"
      loadingText="Loading films"
      @change="handleSelectChange">
    </input-select>
    <app-error
      v-if="error"
      :error="error"
      :handleError="reloadPage"
      showErrorButton
      buttonText="Reload">
    </app-error>
    <transition name="fade" :duration="1000" mode="out-in">
      <div v-if="showBrandImage" class="brand__image animated fadeIn">
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
import AppError from '@/components/AppError';
import InputSelect from '@/components/form/select/InputSelect';
import StarWarsFilm from '@/components/film/StarWarsFilm';
import { getAllFilms, getFilm } from '@/api/star-wars.api';

export default {
  name: 'Home',
  components: {
    AppError,
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
    },
    reloadPage() {
      window.location.reload(true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/views/home";
</style>
