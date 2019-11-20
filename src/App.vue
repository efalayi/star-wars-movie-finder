<template>
  <div id="app" class="app__container">
    <app-header></app-header>
    <main class="app__content">
      <router-view/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';

export default {
  components: {
    AppFooter,
    AppHeader
  }
};
</script>

<style lang="scss">
@import "@/scss/views/app";
</style>
