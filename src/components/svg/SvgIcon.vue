<template>
  <div class="svg__icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 512 512">
      <path fill="currentColor" :d="icon.path"/>
    </svg>
  </div>
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
      console.log('iconProps: ', iconProps);
      return iconProps;
    }
  }
};
</script>

<style lang="scss" scoped>
.svg__icon {
  height: 1.6em;
  width: 1.6em;
  border: 1px solid red;
}
</style>
