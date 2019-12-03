<template>
  <div class="film__filter film__filter--gender">
    <span class="film__filter__title">Gender:</span>
    <div class="gender__options">
      <input-radio
        v-for="option in filterOptions"
        :key="option.id"
        :id="option.id"
        :value="value"
        :label="option.label"
        :name="'gender'"
        @change="handleOptionChange">
      </input-radio>
    </div>
  </div>
</template>

<script>
import InputRadio from '../form/radio/InputRadio';

export default {
  name: 'GenderFilter',
  components: {
    InputRadio
  },
  props: {
    filterOptions: Array,
    value: [String, Number]
  },
  methods: {
    handleOptionChange(value) {
      this.$emit('update:genderOption', value);
    }
  }
};
</script>
