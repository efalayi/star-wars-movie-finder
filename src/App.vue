<template>
  <div id="app" class="app__container">
    <app-header></app-header>
    <main class="app__content animated linear">
      <transition name="fade" :duration="500" mode="out-in">
        <router-view></router-view>
      </transition>
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
