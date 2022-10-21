<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div @click="handleClick">
    <div>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <span>
        <strong>{{ pokemon.name }}</strong>
      </span>
    </div>
    <div v-if="isOpen">
      <div>
        <span>Type:</span>
        <span v-for="(types, index) in pokemon.types" :key="index">
          {{ types.type.name }}
        </span>
      </div>
      <div>
        <span v-for="(stats, index) in pokemon.stats" :key="index">
          {{ stats.stat.name }}: {{ stats.base_stat }}
        </span>
      </div>
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
