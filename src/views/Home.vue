<template>
  <div class="home">
    <HelloWorld msg="Star Wars Movie Finder"/>
    <div class="brand__image">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/views/home";
</style>
