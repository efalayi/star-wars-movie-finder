<template>
  <div class="select-dropdown__list">
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
</template>

<script>
import ListItem from '../../list/ListItem';
import SelectOption from './SelectOption';

export default {
  name: 'SelectOptionList',
  components: {
    ListItem,
    SelectOption
  },
  props: {
    options: Array,
    isSelected: Function,
    handleOptionClick: Function
  }
};
</script>
