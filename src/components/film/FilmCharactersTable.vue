<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Height</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!hasCharacters">
        <td colspan="4">No characters exist for this movie</td>
      </tr>
      <tr
        v-for="(character, index) in characters"
        :key="character.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ character.name }}</td>
        <td>{{ character.gender }}</td>
        <td>{{ character.height }}</td>
      </tr>
      <tr v-if="hasCharacters">
        <td colspan="3" class="text-center">Total Film Character:
          <span class="text-md text-yellow">{{ totalFilmCharacters }}</span>
        </td>
        <td>Sum of heights: </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'FilmCharactersTable',
  props: {
    characters: Array
  },
  computed: {
    hasCharacters() {
      return this.characters.length > 0;
    },
    totalFilmCharacters() {
      const { characters } = this;
      return characters.length;
    }
  }
};
</script>
