<template>
  <div class="app-error">
    <h5 class="app-error__message">{{ error }}</h5>
    <button
      v-if="showErrorButton"
      class="app-error__button"
      @click="handleError">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppError',
  props: {
    error: String,
    handleError: {
      type: Function
    },
    showErrorButton: {
      type: Boolean,
      default: false
    },
    buttonText: String
  }
};
</script>

<style lang="scss">
@import "@/scss/components/app-error";
</style>
