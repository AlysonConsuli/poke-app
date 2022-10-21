<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <span>
      <strong>{{ pokemon.name }}</strong>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: Object,
  },
};
</script>
