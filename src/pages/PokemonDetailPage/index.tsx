import { useGetPokemonByNameQuery } from "@entities/Pokemon";
import { FC } from "react";
import { useParams } from "react-router-dom";

export const PokemonDetailPage: FC = () => {
  const { name } = useParams();
  const { data } = useGetPokemonByNameQuery(name as string);
  console.log(data);

  return <div>PokemonDetailPage</div>;
};
