<template>
  <div class="home">
    <HelloWorld msg="Star Wars Movie Finder"/>
    <input-select
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

export default {
  name: 'Home',
  components: {
    HelloWorld,
    InputSelect
  },
  methods: {
    handleSelectChange(item) {
      console.log('option selected: ', item);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/views/home";
</style>
