<template>
  <div class="input__select">
    <div class="select-field">
      <input
        class="select-field__input"
        type="text"
        placeholder="Select Option"
        v-model="selected.label"
        @input="filterOptions"
        @focus="handleSelectFieldFocus"
      />
      <button class="select-field__button">x</button>
    </div>
    <div :class="{
      'select-dropdown': true,
      'show': showDropdown
    }">
      <div v-if="loading" class="select-dropdown--loading">
        <span>{{ loadingText }}</span>
      </div>
      <div v-else-if="!hasOptions" class="select-dropdown-no-options">
        <span>{{ noOptionsText }}</span>
      </div>
      <div v-else class="select-dropdown__list">
        <ul>
          <select-option
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :selected="isSelected(option)"
            @optionSelected="handleOptionClick">
            <list-item
              :item="{
                primaryText: option.primaryText,
                secondaryText: option.secondaryText
              }">
            </list-item>
          </select-option>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '../../list/ListItem';
import SelectOption from './SelectOption';

export default {
  name: 'InputSelect',
  components: {
    ListItem,
    SelectOption
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
    options: {
      type: Array
    }
  },
  data() {
    return {
      selected: {},
      showDropdown: false
    };
  },
  computed: {
    hasOptions() {
      return this.options.length > 0 && !this.loading;
    }
  },
  methods: {
    filterOptions(event) {
      const query = event.target.value;
      console.log('query: ', query);
      // this.value = query;
    },
    handleOptionClick(item) {
      this.selected = item;
      // this.$emit('change', item);
      this.showDropdown = false;
    },
    handleSelectFieldFocus() {
      this.showDropdown = true;
    },
    isSelected(option) {
      return option.value === this.selected.value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/input-select";
</style>
