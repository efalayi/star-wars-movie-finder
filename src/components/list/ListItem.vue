<template>
  <div class="list-item">
    <span v-if="item.icon" class="list-item__icon">{{ item.icon }}</span>
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
      icon: String,
      primaryText: {
        type: String,
        required: true
      },
      secondaryText: String
    }
  }
};
</script>
