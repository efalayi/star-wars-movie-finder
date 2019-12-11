<template>
  <div class="input__select">
    <div class="select-field">
      <input
        class="select-field__input"
        type="text"
        placeholder="Select Option"
        v-model="value.label"
        @input="handleQueryChange"
        @focus="handleSelectFieldFocus"
      />
      <button class="select-field__button" @click="toggleDropdown">
        <svg-icon
          name="caretDown"
          :class="{
            'button__icon': true,
            'down': showDropdown
          }">
        </svg-icon>
      </button>
    </div>
    <select-dropdown
      :value="selected"
      v-on:update:selected="handleSelectUpdate"
      :visible="showDropdown"
      :loading="loading"
      :loadingText="loadingText"
      :noOptionsText="noOptionsText"
      :options="filteredOptions">
    </select-dropdown>
  </div>
</template>

<script>
import SelectDropdown from './SelectDropdown';

export default {
  name: 'InputSelect',
  components: {
    SelectDropdown
  },
  props: {
    loading: Boolean,
    loadingText: {
      type: String,
      default: 'Loading options'
    },
    noOptionsText: {
      type: String,
      default: 'No options'
    },
    options: Array,
    value: Object
  },
  data() {
    return {
      selected: {},
      showDropdown: false,
      query: ''
    };
  },
  computed: {
    filteredOptions() {
      const { loading, options, query } = this;
      let filteredOptions = !loading ? options : [];

      if (query) {
        filteredOptions = filteredOptions.filter((option) => {
          const queryExistsInLabel = option.label.toLowerCase().includes(query);
          return queryExistsInLabel;
        });
      }
      return filteredOptions;
    },
    hasOptions() {
      return this.filteredOptions.length > 0 && !this.loading;
    }
  },
  methods: {
    handleQueryChange(event) {
      const query = event.target.value;

      if (!query) {
        this.selected = {};
      }
      this.query = query;
    },
    handleSelectFieldFocus() {
      this.showDropdown = true;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleSelectUpdate(selectedOption) {
      this.selected = selectedOption;
      this.query = '';
      this.$emit('change', selectedOption);
      this.showDropdown = false;
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/components/input-select";
</style>
