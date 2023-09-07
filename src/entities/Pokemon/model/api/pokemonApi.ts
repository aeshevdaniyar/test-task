import { baseApi } from "@shared/api/rtk/baseApi";
import { PokemonDetail, PokemonRequest } from "../types/pokemon";
import { pokemonActions } from "../pokemonSlice/pokemonSlice";

const pokemonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPokemons: build.query<PokemonRequest, string | null>({
      query: (newUrl) => {
        return { url: newUrl || "/pokemon" };
      },
      transformResponse(response: PokemonRequest): PokemonRequest {
        const newResponse = { ...response };
        newResponse.results = newResponse.results.map((pokemon) => {
          pokemon["id"] = Number(
            pokemon.url.split("/")[pokemon.url.split("/").length - 2]
          );
          return pokemon;
        });
        return newResponse;
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const { data } = await queryFulfilled;

        dispatch(pokemonActions.setNextUrl(data.next));
        dispatch(pokemonActions.setPrevUrl(data.previous));
      },
    }),
    getPokemonByName: build.query<PokemonDetail, string>({
      query: (pokemonName) => ({
        url: `/pokemon/${pokemonName}`,
      }),
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
