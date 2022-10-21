<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card" @click="handleClick">
    <div class="meta">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <span>
        <strong>{{ pokemon.name }}</strong>
      </span>
    </div>
    <div class="collapse" v-if="isOpen">
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
    </div>
  </div>
</template>

<script>
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
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
