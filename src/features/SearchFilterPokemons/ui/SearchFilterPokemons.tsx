import { RouteNames } from "@app/providers/RouterProvider/config/routes";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Flex,
  FormErrorMessage,
  Box,
  FormControl,
} from "@chakra-ui/react";
import { pokemonActions } from "@entities/Pokemon";
import { useAppDispatch } from "@shared/utils/hooks/useAppDispatch";
import { useAppSelector } from "@shared/utils/hooks/useAppSelector";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchFilterPokemons = () => {
  const searchTerm = useAppSelector((state) => state.pokemon.searchTerm);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onChange = (value: string) => {
    dispatch(pokemonActions.setSearchTerm(value));
    setIsError(false);
  };
  const onSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(RouteNames.POKEMON_DETAIL_PAGE + `/${searchTerm}`);
    }
    if (!searchTerm) {
      setIsError(true);
    }
  };

  return (
    <Box as="form" w="full" onSubmit={onSubmit}>
      <Flex w="full" gap={2}>
        <FormControl w="full" isInvalid={isError}>
          <Flex w="full" alignItems="center" gap={2}>
            <InputGroup w="full">
              <InputLeftElement
                h="full"
                alignItems="center"
                pointerEvents="none"
              >
                <SearchIcon />
              </InputLeftElement>
              <Input
                onChange={(e) => onChange(e.target.value)}
                value={searchTerm}
                type="text"
                placeholder="Введите название покемона"
                w="100%"
                size="lg"
              />
            </InputGroup>
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              type="submit"
            />
          </Flex>

          {isError && (
            <FormErrorMessage>Введите название покемона</FormErrorMessage>
          )}
        </FormControl>
      </Flex>
    </Box>
  );
};
