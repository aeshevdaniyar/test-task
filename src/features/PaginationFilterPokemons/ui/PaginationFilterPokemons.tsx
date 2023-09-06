import { pokemonActions } from "@entities/Pokemon";
import { Pagination } from "@shared/ui/Pagination";
import { useAppDispatch } from "@shared/utils/hooks/useAppDispatch";
import { useAppSelector } from "@shared/utils/hooks/useAppSelector";

export const PaginationFilterPokemons = () => {
  const prevUrl = useAppSelector((state) => state.pokemon.prevUrl);
  const nextUrl = useAppSelector((state) => state.pokemon.nextUrl);
  const dispatch = useAppDispatch();
  const gotoNextPage = () => {
    dispatch(pokemonActions.setCurrentPage(nextUrl));
  };
  const gotoPrevPage = () => {
    dispatch(pokemonActions.setCurrentPage(prevUrl));
  };
  return (
    <Pagination
      next={nextUrl}
      prev={prevUrl}
      gotoPrevPage={gotoPrevPage}
      gotoNextPage={gotoNextPage}
    />
  );
};
