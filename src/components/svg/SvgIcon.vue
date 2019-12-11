<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    class="svg__icon"
    preserveAspectRatio="xMidYMid meet">
    <path
      fill="currentColor"
      :d="icon.path"
      :transform="`translate(${translateX}, ${translateY})`"
    />
  </svg>
</template>

<script>
import icons from './icons';

export default {
  name: 'SvgIcon',
  props: {
    name: String
  },
  data() {
    return {
      translateX: 0,
      translateY: 0
    };
  },
  computed: {
    icon() {
      const iconProps = icons[this.name];
      return iconProps;
    }
  },
  mounted() {
    // Transfrom svg
    // see: https://www.w3.org/TR/SVG/coords.html#ComputingAViewportsTransform
    const elementBox = this.$el.getBBox();

    const vbX = 0; const vbY = 0;
    const vbWidth = 512; const vbHeight = 512;

    const eX = elementBox.x; const eY = elementBox.y;
    const eWidth = elementBox.width; const eHeight = elementBox.height;

    let scaleX = eWidth / vbWidth;
    const scaleY = eHeight / vbHeight;

    if (eX > 0 && (scaleX > scaleY)) {
      scaleX = scaleY;
    }

    let translateX = eX - (vbX * scaleX);
    let translateY = eY - (vbY * scaleY);

    translateX += (eWidth - vbWidth * scaleX) / 2;
    translateY += (eHeight - vbHeight) / 2;

    this.translateX = translateX;
    this.translateY = translateY;
  }
};
</script>

<style lang="scss" scoped>
.svg__icon {
  height: 1.2em;
  width: 1.2em;
  font-size: inherit;
  vertical-align: middle;

  path {
    transform-origin: top center;
  }
}
</style>
