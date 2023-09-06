import { Pokemon } from "../model/types/pokemon";
import { FC } from "react";
import { PokemonCard } from "./PokemonCard";
import { SimpleGrid } from "@chakra-ui/react";
interface PokemonCardListProps {
  pokemons: Pokemon[];
}

export const PokemonCardList: FC<PokemonCardListProps> = ({ pokemons }) => {
  return (
    <SimpleGrid minChildWidth="240px" spacing="20px">
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} {...pokemon} />;
      })}
    </SimpleGrid>
  );
};
