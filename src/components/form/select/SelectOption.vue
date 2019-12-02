<template>
  <li
    :class="{
      'dropdown__list__item': true,
      'is-selected': selected
    }"
    @click.stop="handleSelect"
  >
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<script>
export default {
  name: 'SelectOption',
  props: {
    selected: Boolean,
    label: {
      type: [String, Number],
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    handleSelect() {
      this.$emit('optionSelected', {
        label: this.label,
        value: this.value
      });
    }
  }
};
</script>
