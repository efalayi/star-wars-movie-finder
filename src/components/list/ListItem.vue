<template>
  <div class="list-item">
    <span class="list-item__description">
      <span class="description--primary">{{ item.primaryText }}</span>
      <span v-if="item.secondaryText" class="description--secondary">{{ item.secondaryText }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      primaryText: {
        type: String,
        required: true
      },
      secondaryText: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/list-item";
</style>
