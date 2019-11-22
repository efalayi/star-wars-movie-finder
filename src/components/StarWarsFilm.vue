<template>
  <div v-if="loading">
    <span>loading star wars film</span>
  </div>
  <div v-else>
    <div v-if="film">
      <span>Film</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarWarsFilm',
  props: {
    loading: Boolean,
    film: Object
  }
};
</script>
