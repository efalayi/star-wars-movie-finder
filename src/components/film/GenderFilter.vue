<template>
  <div class="film__filter film__filter--gender">
    <span class="film__filter__title">Gender:</span>
    <div class="gender__options">
      <!-- <input-radio
        v-for="option in filterOptions"
        :key="option.id"
        :value="option.label"
        :label="option.label"
        :name="'gender'">
      </input-radio> -->
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
          @change="handleOptionChange">
        <label :for="option.id">{{ option.label }}</label>
      </span>
    </div>
  </div>
</template>

<script>
// import InputRadio from '../form/radio/InputRadio';

export default {
  name: 'GenderFilter',
  components: {
    // InputRadio
  },
  props: {
    filterOptions: Array,
    value: String
  },
  methods: {
    handleOptionChange(event) {
      this.$emit('update:genderOption', event.target.value);
    },
    isSelected(option) {
      return option.value === this.value;
    }
  }
};
</script>
