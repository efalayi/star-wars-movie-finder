<template>
  <div class="list-item">
    <slot name="list-item">
      <span class="list-item__description">
        <span class="description--primary">{{ primaryText }}</span>
        <span
          v-if="secondaryText"
          class="description--secondary">{{ secondaryText }}</span>
      </span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      primaryText: {
        type: String
      },
      secondaryText: String
    }
  },
  computed: {
    primaryText() {
      const { item } = this;
      const text = item ? item.primaryText : '';
      return text;
    },
    secondaryText() {
      const { item } = this;
      const text = item ? item.secondaryText : '';
      return text;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/list-item";
</style>
