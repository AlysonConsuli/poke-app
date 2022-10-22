<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card" @click="handleClick" :style="backgroundColor">
    <div class="meta">
      <img :src="imgSrc" :alt="pokemon.name" />
      <span>
        <strong>{{ pokemon.name }}</strong>
      </span>
    </div>
    <v-icon class="arrow-down" v-if="!isOpen"> mdi-chevron-down </v-icon>
    <div class="collapsible" :style="collapse">
      <div class="type">
        <span>Type:</span>
        <span v-for="(types, index) in pokemon.types" :key="index">
          {{ types.type.name }}
          {{ pokemon.types.length - 1 !== index ? "/" : "" }}
        </span>
      </div>
      <ul class="infos">
        <li v-for="(stats, index) in pokemon.stats" :key="index">
          {{ stats.stat.name }}: {{ stats.base_stat }}
        </li>
      </ul>
      <v-icon> mdi-chevron-up </v-icon>
    </div>
  </div>
</template>

<script>
import getTypeColor from "../../utils/getTypeColor";
import toggleCollapse from "../../utils/toggleCollapse";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    pokemon: Object,
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    backgroundColor() {
      const type = this.pokemon.types[0].type.name;
      return getTypeColor(type);
    },
    collapse() {
      return toggleCollapse(this.isOpen);
    },
    imgSrc() {
      const official_artwork = "official-artwork";
      return (
        this.pokemon.sprites.front_default ||
        this.pokemon.sprites.other[official_artwork].front_default
      );
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
