<template>
  <div class="app__container">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  components: {
    AppHeader
  }
};
</script>

<style lang="scss">
@import "@/scss/views/app";
</style>
