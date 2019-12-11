<template>
  <div class="flex items-center justify-center">
    <font-awesome-icon icon="spinner" :size="iconSize" flip="both" spin></font-awesome-icon>
    <span class="capitalise ml-4">{{ loadingText }}</span>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    loadingText: {
      type: String,
      default: 'Loading'
    },
    iconSize: {
      type: String,
      default: 'lg'
    },
    textClass: {
      type: String
    }
  }
};
</script>
