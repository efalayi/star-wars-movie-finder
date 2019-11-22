<template>
  <li
    class="dropdown__list__item"
    @click.stop="handleSelect"
  >
    <slot>
      {{ currentLabel }}
    </slot>
  </li>
</template>

<script>
export default {
  name: 'SelectOption',
  props: {
    label: {
      type: [String, Number],
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    currentLabel() {
      return this.label;
    },
    currentValue() {
      return this.value;
    }
  },
  methods: {
    handleSelect() {
      this.$emit('optionSelected', {
        label: this.currentLabel,
        value: this.currentValue
      });
    }
  }
};
</script>
