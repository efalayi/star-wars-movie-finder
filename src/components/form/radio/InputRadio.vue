<template>
  <span class="gender__option">
    <input
      ref="radio"
      type="radio"
      :id="id"
      :name="name"
      :checked="isSelected()"
      :value="label"
      v-model="model"
      @change="handleChange">
    <label :for="id">{{ label }}</label>
  </span>
</template>

<script>
export default {
  name: 'InputRadio',
  props: {
    value: {},
    label: {},
    id: String,
    name: String
  },
  data() {
    return {
      selected: this.value
    };
  },
  computed: {
    model: {
      get() {
        return this.selected;
      },
      set(value) {
        this.selected = value;
      }
    }
  },
  watch: {
    value(nextValue, prevValue) {
      if (nextValue !== prevValue) {
        this.model = nextValue;
      }
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', this.model);
    },
    isSelected() {
      return this.model === this.label;
    }
  }
};
</script>
