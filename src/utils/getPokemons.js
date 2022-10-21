import axios from "axios";

export default async function getPokemons(pokemon) {
  const pokemons = [];
  const URL = "https://pokeapi.co/api/v2";
  const { data: specie } = await axios.get(
    `${URL}/pokemon-species/${pokemon.name}`,
  );
  const { data: evolution } = await axios.get(specie.evolution_chain.url);
  let evolutionChain = evolution.chain;
  while (evolutionChain) {
    const name = evolutionChain?.species.name;
    const { data: pokemonData } = await axios.get(`${URL}/pokemon/${name}`);
    pokemons.push(pokemonData);
    evolutionChain = evolutionChain?.evolves_to[0];
  }
  return pokemons;
}
