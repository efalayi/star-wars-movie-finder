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
      <ul class="select-dropdown__list">
        <li
          v-for="option in options"
          :key="option.name"
          class="dropdown__list__item"
          @click="handleDropdownItemClick(option)">
            {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputSelect',
  data() {
    return {
      options: [
        {
          name: 'option-1',
          label: 'Option 1',
          value: 'option-1'
        },
        {
          name: 'option-2',
          label: 'Option 2',
          value: 'option-2'
        },
        {
          name: 'option-3',
          label: 'Option 3',
          value: 'option-3'
        }
      ],
      value: ''
    };
  },
  methods: {
    filterOptions(event) {
      const query = event.target.value;
      this.value = query;
    },
    handleDropdownItemClick(item) {
      this.value = item.label;
      this.$emit('change', item);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/input-select";
</style>
