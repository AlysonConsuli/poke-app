export default function getError(error) {
  if (error?.response?.status === 404) {
    return "Pokémon not found!";
  }
  return "Something went wrong. Try another Pokémon!";
}
