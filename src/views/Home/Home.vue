<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Form :disabled="disabled" v-on:show-pokemon="showPokemons"></Form>
    <div class="cards">
      <Card
        v-for="(pokemon, index) in pokemons"
        :pokemon="pokemon"
        :key="index"
      ></Card>
      <v-alert v-if="error" dense outlined type="error" color="#F15E5F">
        {{ error }}
      </v-alert>
    </div>
  </div>
</template>

<script>
import Form from "../../components/Form/Form.vue";
import Card from "../../components/Card/Card.vue";
import axios from "axios";

export default {
  components: {
    Form,
    Card,
  },
  data() {
    return {
      pokemons: [],
      disabled: false,
      error: "",
    };
  },
  methods: {
    async showPokemons(pokemon) {
      this.disabled = true;
      const URL = "https://pokeapi.co/api/v2";
      this.pokemons.length = 0;
      this.error = "";
      try {
        const { data: specie } = await axios.get(
          `${URL}/pokemon-species/${pokemon.name}`,
        );
        const { data: evolution } = await axios.get(specie.evolution_chain.url);
        let evolutionChain = evolution.chain;
        while (evolutionChain) {
          const name = evolutionChain?.species.name;
          const { data: pokemonData } = await axios.get(
            `${URL}/pokemon/${name}`,
          );
          this.pokemons.push(pokemonData);
          evolutionChain = evolutionChain?.evolves_to[0];
        }
      } catch (error) {
        if (error?.response?.status === 404) {
          return (this.error = "Pokémon not found!");
        }
        this.error = "Something went wrong. Try another Pokémon!";
      } finally {
        this.disabled = false;
      }
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
