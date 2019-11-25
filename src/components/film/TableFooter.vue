<template>
  <tr>
    <td colspan="3">
      <div class="flex items-center justify-between">
        <span>Total Film Characters:</span>
        <span class="text-md text-yellow">{{ totalFilmCharacters }}</span>
      </div>
    </td>
    <td>
      <div class="flex items-center justify-between">
        <span>Total:</span>
        <div class="flex flex-col">
          <span class="text-sm text-yellow">
          {{ sumOfHeights.cm }}<sub>cm</sub>
          </span>
          <div>(<span class="text-sm">
              {{ sumOfHeights.ft }}<sub>ft</sub>
            </span>
            <span class="text-xs ml-3 mr-3">/</span>
            <span class="text-sm">
              {{ sumOfHeights.inch }}<sub>inch</sub>
            </span>)
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableFooter',
  props: {
    totalFilmCharacters: Number,
    sumOfHeights: Object
  }
};
</script>
