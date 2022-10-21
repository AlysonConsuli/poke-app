<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Form v-on:show-pokemon="showPokemons"></Form>
    <div v-for="(pokemon, index) in pokemons" :key="index">
      <span>
        <strong>{{ pokemon }}</strong>
      </span>
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";
import axios from "axios";

export default {
  components: {
    Form,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  methods: {
    async showPokemons(el) {
      try {
        this.pokemons.length = 0;
        const { data: specie } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${el.name}`,
        );
        const { data: pokemon } = await axios.get(specie.evolution_chain.url);
        let obj = pokemon.chain;
        while (obj) {
          this.pokemons.push(obj?.species.name);
          obj = obj?.evolves_to[0];
        }
        console.log(this.pokemons);
      } catch (error) {
        alert(error?.response.data);
        console.log(error);
      }
    },
  },
};
</script>
