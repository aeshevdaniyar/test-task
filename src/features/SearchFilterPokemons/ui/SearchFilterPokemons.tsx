import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { pokemonActions } from "@entities/Pokemon";
import { useAppDispatch } from "@shared/utils/hooks/useAppDispatch";
import { useAppSelector } from "@shared/utils/hooks/useAppSelector";

export const SearchFilterPokemons = () => {
  const searchTerm = useAppSelector((state) => state.pokemon.searchTerm);
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(pokemonActions.setSearchTerm(value));
  };
  return (
    <InputGroup w="full">
      <InputLeftElement h="full" alignItems="center" pointerEvents="none">
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
  );
};
