import { FC, memo } from "react";
import { Pokemon } from "../model/types/pokemon";
import { Card, CardBody, Heading, LinkBox, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RouteNames } from "@app/providers/RouterProvider/config/routes";
export const PokemonCard: FC<Pokemon> = memo(({ name, id }) => {
  return (
    <LinkBox as={Link} to={`${RouteNames.POKEMON_DETAIL_PAGE}/${name}`}>
      <Card
        borderRadius="xl"
        variant="outline"
        borderColor="teal"
        transition="0.3s all"
        _hover={{
          bg: "blue.200",
        }}
      >
        <CardBody textAlign="center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt="Pokemon"
            borderRadius="lg"
            margin="0 auto"
          />
          <Heading textTransform="capitalize" size="md" textAlign="center">
            {name}
          </Heading>
        </CardBody>
      </Card>
    </LinkBox>
  );
});
