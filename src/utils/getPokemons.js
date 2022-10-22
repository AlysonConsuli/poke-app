import axios from "axios";

export default async function getPokemons(pokemon) {
  const pokemons = [];
  const URL = "https://pokeapi.co/api/v2";

  const { data: specie } = await axios.get(
    `${URL}/pokemon-species/${pokemon.name}`,
  );

  if (!specie?.evolution_chain?.url) {
    return await __getNewGenPokemon(pokemon, URL);
  }

  const { data: evolution } = await axios.get(specie.evolution_chain.url);
  const evolutionChain = evolution.chain;

  await __pushPokemon(evolutionChain, pokemons);
  await __addPokemons(evolutionChain, pokemons);

  return pokemons;
}

async function __getNewGenPokemon(pokemon, URL) {
  const { data: pokemonData } = await axios.get(
    `${URL}/pokemon/${pokemon.name}`,
  );
  return [pokemonData];
}

async function __addPokemons(pokemonEvolution, pokemons) {
  for (const evolutionChain of pokemonEvolution.evolves_to) {
    await __pushPokemon(evolutionChain, pokemons);
    if (evolutionChain.evolves_to.length !== 0) {
      __addPokemons(evolutionChain, pokemons);
    }
  }
}

async function __pushPokemon(evolutionChain, pokemons) {
  const URL = "https://pokeapi.co/api/v2";
  const name = evolutionChain?.species.name;
  const { data: pokemonData } = await axios.get(`${URL}/pokemon/${name}`);
  pokemons.push(pokemonData);
}
