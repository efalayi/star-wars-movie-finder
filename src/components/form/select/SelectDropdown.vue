<template>
  <transition name="flipX" :duration="500">
    <div v-show="visible" class="select-dropdown">
      <div v-if="loading" class="select-dropdown--loading">
        <list-item>
          <loader slot="list-item" :loadingText="loadingText"></loader>
        </list-item>
      </div>
      <div v-else-if="!hasOptions" class="select-dropdown-no-options">
        <list-item
          :item="{ primaryText: noOptionsText }">
        </list-item>
      </div>
      <div v-else class="select-dropdown__list">
        <ul>
          <select-option
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :selected="isOptionSelected(option)"
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
  </transition>
</template>

<script>
import ListItem from '../../list/ListItem';
import Loader from '../../Loader';
import SelectOption from './SelectOption';

export default {
  name: 'SelectDropdown',
  components: {
    ListItem,
    Loader,
    SelectOption
  },
  props: {
    options: Array,
    visible: Boolean,
    loading: Boolean,
    loadingText: String,
    noOptionsText: String,
    value: Object
  },
  computed: {
    hasOptions() {
      return this.options.length > 0 && !this.loading;
    }
  },
  methods: {
    handleOptionClick(option) {
      this.$emit('update:selected', option);
    },
    isOptionSelected(option) {
      return option.value === this.value.value;
    }
  }
};
</script>
