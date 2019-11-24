<template>
  <thead>
    <tr>
      <th
        v-for="column in columns"
        :key="column.id"
        @click="handleColumnClick(column)">
        {{ column.label }}
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
    handleColumnClick(column) {
      if (column.sortable) {
        console.log('column clicked: ', column);
        this.$emit('sortColumn', {
          column,
          order: 'asc'
        });
      }
    }
  }
};
</script>
