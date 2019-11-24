<template>
  <table class="table table-bordered animated slower fadeIn">
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
        <td class="text-center">
          <span v-if="genderIsUndefined(character.gender)">
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
      <tr v-if="hasCharacters">
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
    </tbody>
  </table>
</template>

<script>
import { sumOfCharacterHeights } from '@/lib/helpers/film.helper';

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
    },
    sumOfHeights() {
      const { characters } = this;
      const sumOfHeights = sumOfCharacterHeights(characters);
      return sumOfHeights;
    }
  },
  methods: {
    genderIsUndefined(gender) {
      const isMale = gender.toLowerCase() === 'male';
      const isFemale = gender.toLowerCase() === 'female';
      const isUndefined = !isMale && !isFemale;
      return isUndefined;
    }
  }
};
</script>
