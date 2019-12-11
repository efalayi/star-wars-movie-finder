<template>
  <div class="app__footer">
    <span class="footer__text">&copy; {{ currentYear }}</span>
    <span class="footer__text">Made with
      <span class="animated slow pulse infinite">
        <font-awesome-icon
          icon="heart"
          class="text-sm text-red animated pulse infinite">
        </font-awesome-icon>
      </span> by
      <a href="">efalayi</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      const currentDate = new Date();
      return currentDate.getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "@/scss/components/app-footer";
</style>
