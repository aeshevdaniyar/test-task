import { PokemonCardList, useGetPokemonsQuery } from "@entities/Pokemon";
import { FC } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Container,
  Spinner,
} from "@chakra-ui/react";

import { useAppSelector } from "@shared/utils/hooks/useAppSelector";
import { PaginationFilterPokemons } from "@features/PaginationFilterPokemons";

export const MainPage: FC = () => {
  const currentPage = useAppSelector((state) => state.pokemon.currentPage);

  const { data, isLoading, isSuccess, isError } = useGetPokemonsQuery(
    currentPage,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  if (isError) {
    return (
      <Container maxW="4xl" mt={8}>
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Возникла непредвиденная ошибка
          </AlertTitle>
        </Alert>
      </Container>
    );
  }
  return (
    <Box p={"10"}>
      <Container maxW="4xl">
        <Box mt={6}>
          {isSuccess && <PokemonCardList pokemons={data?.results} />}

          {isSuccess && !data?.results && (
            <Alert status="info">
              <AlertIcon />
              Нету покемонов {":("}
            </Alert>
          )}
          {isLoading && (
            <Center>
              <Spinner size="xl" />
            </Center>
          )}
        </Box>
        <Box mt={6}>
          <PaginationFilterPokemons />
        </Box>
      </Container>
    </Box>
  );
};
