<template>
  <table class="film__table">
    <table-header @sortColumn="sortColumn"></table-header>
    <transition-group
      appear
      name="flipX"
      tag="tbody"
      :duration="400">
      <tr v-if="!hasCharacters" key="has-no-characters">
        <td colspan="4">No characters exist for this movie</td>
      </tr>
      <tr
        v-for="(character, index) in characters"
        :key="character.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ character.name }}</td>
        <td class="text-center">
          <span v-if="isNonBinaryGender(character.gender)">
            {{ character.gender }}
          </span>
          <font-awesome-icon
            v-else
            :icon="character.gender"
            size="lg">
          </font-awesome-icon>
        </td>
        <td class="text-center">{{ character.height }}</td>
      </tr>
      <table-footer
        v-if="hasCharacters"
        key="table-footer"
        :totalFilmCharacters="totalFilmCharacters"
        :sumOfHeights="sumOfHeights">
      </table-footer>
    </transition-group>
  </table>
</template>

<script>
import { sumOfCharacterHeights } from '@/lib/helpers/film.helper';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';

export default {
  name: 'FilmCharactersTable',
  components: {
    TableFooter,
    TableHeader
  },
  props: {
    characters: Array,
    sortColumn: Function
  },
  computed: {
    hasCharacters() {
      return this.characters.length > 0;
    },
    totalFilmCharacters() {
      const { characters } = this;
      return characters.length;
    },
    sumOfHeights() {
      const { characters } = this;
      const sumOfHeights = sumOfCharacterHeights(characters);
      return sumOfHeights;
    }
  },
  methods: {
    isNonBinaryGender(gender) {
      const isMale = gender.toLowerCase() === 'male';
      const isFemale = gender.toLowerCase() === 'female';
      const isNonBinary = !isMale && !isFemale;
      return isNonBinary;
    }
  }
};
</script>
