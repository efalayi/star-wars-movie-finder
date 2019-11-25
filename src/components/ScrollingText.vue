<template>
  <div class="scrolling-text">
    <marquee
      :direction="direction"
      height="100%"
      width="100%"
      :loop="loop"
      scrollamount="3">
      <slot></slot>
    </marquee>
  </div>
</template>

<script>
export default {
  name: 'ScrollingText',
  props: {
    direction: {
      type: String,
      default: 'up'
    },
    loop: {
      type: Number,
      default: -1
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/components/scrolling-text";
</style>
