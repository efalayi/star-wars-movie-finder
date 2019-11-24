<template>
  <div class="input__select">
    <div class="select-field">
      <input
        class="select-field__input"
        type="text"
        placeholder="Select Option"
        v-model="selected.label"
        @input="handleQueryChange"
        @focus="handleSelectFieldFocus"
      />
      <button class="select-field__button" @click="toggleDropdown">x</button>
    </div>
    <transition name="flipX" :duration="500">
      <div v-if="showDropdown" :class="{
        'select-dropdown': true
      }">
        <div v-if="loading" class="select-dropdown--loading">
          <list-item
            :item="{ primaryText: loadingText }">
          </list-item>
        </div>
        <div v-else-if="!hasOptions" class="select-dropdown-no-options">
          <list-item
            :item="{ primaryText: noOptionsText }">
          </list-item>
        </div>
        <select-option-list
          v-else
          :options="filteredOptions"
          :isSelected="isSelected"
          :handleOptionClick="handleOptionClick">
        </select-option-list>
      </div>
    </transition>
  </div>
</template>

<script>
import ListItem from '../../list/ListItem';
import SelectOptionList from './SelectOptionList';

export default {
  name: 'InputSelect',
  components: {
    ListItem,
    SelectOptionList
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
    handleOptionClick(item) {
      this.selected = item;
      this.query = '';
      this.$emit('change', item);
      this.showDropdown = false;
    },
    handleSelectFieldFocus() {
      this.showDropdown = true;
    },
    isSelected(option) {
      return option.value === this.selected.value;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/components/input-select";
</style>
