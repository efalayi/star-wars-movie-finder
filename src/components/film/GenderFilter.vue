<template>
  <div class="film__filter film__filter--gender">
    <span class="film__filter__title">Gender:</span>
    <div class="gender__options">
      <span
        v-for="option in filterOptions"
        :key="option.id"
        class="gender__option">
        <input
          type="radio"
          :id="option.id"
          name="gender"
          :value="option.value"
          :checked="isSelected(option)"
          @click="handleOptionChange">
        <label for="all">{{ option.label }}</label>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenderFilter',
  props: {
    selectedOption: String
  },
  data() {
    return {
      filterOptions: [
        {
          id: 'all',
          value: 'all',
          label: 'All'
        },
        {
          id: 'female',
          value: 'female',
          label: 'Female'
        },
        {
          id: 'male',
          value: 'male',
          label: 'Male'
        }
      ]
    };
  },
  methods: {
    handleOptionChange(event) {
      this.$emit('change', event.target.value);
    },
    isSelected(option) {
      return option.value === this.selectedOption;
    }
  }
};
</script>
