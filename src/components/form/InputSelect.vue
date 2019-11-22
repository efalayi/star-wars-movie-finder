<template>
  <div class="input__select">
    <div class="select-field">
      <input
        class="select-field__input"
        type="text"
        placeholder="Select Option"
        v-model="value"
        @input="filterOptions"
      />
      <button class="select-field__button">x</button>
    </div>
    <div class="select-dropdown">
      <div v-if="loading" class="select-dropdown__list">
        <span class="select-dropdown__list loading">{{ loadingText }}</span>
      </div>
      <ul v-else class="select-dropdown__list">
        <select-option
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          @optionSelected="handleOptionClick">
          <list-item
            :item="{
              icon: '',
              primaryText: option.primaryText,
              secondaryText: option.secondaryText
            }">
          </list-item>
        </select-option>
      </ul>
    </div>
  </div>
</template>

<script>
import ListItem from '../list/ListItem';
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
    options: {
      type: Array
    }
  },
  data() {
    return {
      value: ''
    };
  },
  computed: {
    hasOptions() {
      return this.options.length > 0 && !this.loading;
    }
  },
  mounted() {
    console.log('slot: ', this.$slots);
  },
  methods: {
    filterOptions(event) {
      const query = event.target.value;
      this.value = query;
    },
    handleOptionClick(item) {
      console.log('item selected: ', item);
      // this.value = item.label;
      // this.$emit('change', item);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/input-select";
</style>
