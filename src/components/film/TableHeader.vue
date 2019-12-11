<template>
  <thead>
    <tr>
      <th
        v-for="column in columns"
        :key="column.id"
        :ref="column.value"
        :class="{
          'sortable': column.sortable
        }">
        <div class="table__header__column">
          <span>
            {{ column.label }}
          </span>
          <div v-if="column.sortable" class="sortable__icons">
            <button @click="handleColumnClick(column, 'asc')" class="sortable__icon">
              <svg-icon name="caretUp"></svg-icon>
            </button>
            <button
              @click="handleColumnClick(column, 'desc')"
              class="sortable__icon">
              <svg-icon name="caretDown"></svg-icon>
            </button>
          </div>
        </div>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'TableHeader',
  data() {
    return {
      columns: [
        {
          id: 1,
          label: '#',
          sortable: false
        },
        {
          id: 2,
          label: 'Name',
          value: 'name',
          sortable: true
        },
        {
          id: 3,
          label: 'Gender',
          value: 'gender',
          sortable: true
        },
        {
          id: 4,
          label: 'Height',
          value: 'height',
          sortable: true
        }
      ]
    };
  },
  methods: {
    removeOrderClassInColumns() {
      const columnRefs = this.$refs;
      const columns = Object.values(columnRefs);
      columns.forEach((column) => {
        const [element] = column;
        element.classList.remove('ascending', 'descending');
      });
    },
    updateSortableIconStyle(columnValue, order) {
      const [parentElement] = this.$refs[columnValue];
      const orderClass = order === 'asc' ? 'ascending' : 'descending';

      // remove existing order classes from columns
      this.removeOrderClassInColumns();
      parentElement.classList.add(orderClass);
    },
    handleColumnClick(column, order) {
      if (column.sortable) {
        this.updateSortableIconStyle(column.value, order);
        this.$emit('sortColumn', { column, order });
      }
    }
  }
};
</script>
