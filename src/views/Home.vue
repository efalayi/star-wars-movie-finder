<template>
  <div class="home">
    <input-select
      v-model="selectedFilm"
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
    <div v-if="showBrandImage" class="brand__image animated fadeIn">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
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
import { getAllFilms, getFilmByUrl } from '@/api/star-wars.api';
import { getFilmFromCache, saveFilmToCache } from '@/lib/helpers/cache.helper';

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
      loadingFilm: false,
      selectedFilm: {}
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
  watch: {
    async selectedFilm(nextValue, prevValue) {
      const nextValueLabel = nextValue.label;
      const prevValueLabel = prevValue.label;

      if (nextValueLabel !== prevValueLabel) {
        await this.getFilm(nextValue);
      }
    }
  },
  async mounted() {
    this.getAllFilms();
  },
  methods: {
    async handleSelectChange(item) {
      this.selectedFilm = item;
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
    async getFilm(item) {
      const { label, value: url } = item;
      this.loadingFilm = true;
      let retrievedFilm = getFilmFromCache(label);

      if (!retrievedFilm) {
        const { apiError, film } = await getFilmByUrl(url);
        this.error = apiError;
        retrievedFilm = film;

        if (!apiError) {
          saveFilmToCache(retrievedFilm);
        }
      }
      this.film = retrievedFilm;
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
