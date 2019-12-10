<template>
  <div class="app__footer">
    <span class="footer__text">&copy; {{ currentYear }}</span>
    <span class="footer__text">Made with
      <span>
        <svg-icon name="heart" class="text-xs text-red animated pulse infinite"></svg-icon>
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
