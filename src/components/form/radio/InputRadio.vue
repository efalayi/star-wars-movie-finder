<template>
  <span class="gender__option">
    <input
      type="radio"
      :id="label"
      :name="name"
      :value="value"
      :checked="isSelected"
      @change="handleOptionChange"
      v-model="model">
    <label :for="label">{{ label }}</label>
  </span>
</template>

<script>
export default {
  name: 'InputRadio',
  props: {
    value: {},
    label: {},
    name: String
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        console.log('set new radio input value: ', value);
      }
    }
  },
  methods: {
    isSelected(option) {
      console.log('isSelected: ', option);
      return this.model === this.label;
    },
    handleOptionChange() {
      console.log('handle radio input change');
    }
  }
};
</script>
