import { RouteNames } from "@app/providers/RouterProvider/config/routes";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Container, Button } from "@chakra-ui/react";
import { PokemonDatailCard, useGetPokemonByNameQuery } from "@entities/Pokemon";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const PokemonDetailPage: FC = () => {
  const { name } = useParams();
  const { data, isSuccess, isLoading, isError } = useGetPokemonByNameQuery(
    name as string
  );

  return (
    <Container maxW={"7xl"}>
      <Button
        as={Link}
        to={RouteNames.MAIN_PAGE}
        leftIcon={<ChevronLeftIcon />}
        mb={6}
      >
        Назад
      </Button>
      <PokemonDatailCard
        data={data}
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </Container>
  );
};
