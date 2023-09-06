import { RootState } from "@app/providers/StoreProvider/config/store";
import { Pokemon } from "../types/pokemon";

export const getFilteredPokemon = (pokemons: Pokemon[]) => (state: RootState) =>
  pokemons.filter(
    (pokemon) =>
      pokemon.name
        .toLowerCase()
        .indexOf(state.pokemon.searchTerm.toLowerCase()) !== -1
  );
