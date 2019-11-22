<template>
  <div class="home">
    <HelloWorld msg="Star Wars Movie Finder"/>
    <input-select
      :options="filmOptionList"
      :loading="loading"
      @change="handleSelectChange">
    </input-select>
    <div v-if="error">
      <h3 class="text-error">{{ error }}</h3>
    </div>
    <div class="brand__image">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import InputSelect from '@/components/form/select/InputSelect';
import { getAllFilms } from '@/api/star-wars.api';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    InputSelect
  },
  data() {
    return {
      loading: false,
      films: [],
      filmOptionList: [],
      error: null
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
    handleSelectChange(item) {
      console.log('option selected: ', item);
    },
    async getAllFilms() {
      this.loading = true;
      const { films, filmOptionList, apiError } = await getAllFilms();
      if (apiError) {
        this.error = apiError;
      } else {
        this.films = films;
        this.filmOptionList = filmOptionList;
      }
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/views/home";
</style>
