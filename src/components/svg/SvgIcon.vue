<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="icon.height"
    :width="icon.width"
    viewBox="0 0 512 512"
    class="svg__icon"
    preserveAspectRatio="xMidYMid meet">
    <path fill="currentColor" :d="icon.path"/>
  </svg>
</template>

<script>
import icons from './icons';

export default {
  name: 'SvgIcon',
  props: {
    name: String
  },
  computed: {
    icon() {
      const iconProps = icons[this.name];
      return iconProps;
    }
  }
};
</script>

<style lang="scss" scoped>
.svg__icon {
  display: inline-flex;
  align-items: center;
  height: 1em;
  width: 1em;
  font-size: inherit;
  line-height: 1;
  // vertical-align: middle;
  // vertical-align: -0.125em;
  // border: 1px solid red;
}
</style>
