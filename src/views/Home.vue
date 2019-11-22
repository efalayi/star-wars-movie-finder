<template>
  <div class="home">
    <HelloWorld msg="Star Wars Movie Finder"/>
    <input-select
      :options="films"
      @change="handleSelectChange">
    </input-select>
    <div class="brand__image">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import InputSelect from '@/components/form/InputSelect';
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
      error: null
    };
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
      const { films, apiError } = await getAllFilms();
      console.log('films: ', films);
      if (apiError) {
        this.error = apiError;
      } else {
        this.films = films;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/views/home";
</style>
