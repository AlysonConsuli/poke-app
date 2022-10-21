<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
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
  </main>
</template>

<script>
import Form from "../../components/Form/Form.vue";
import Card from "../../components/Card/Card.vue";
import getPokemons from "../../utils/getPokemons";
import getError from "../../utils/getError";

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
      this.pokemons.length = 0;
      this.error = "";
      try {
        this.pokemons = await getPokemons(pokemon);
      } catch (error) {
        this.error = getError(error);
      } finally {
        this.disabled = false;
      }
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
