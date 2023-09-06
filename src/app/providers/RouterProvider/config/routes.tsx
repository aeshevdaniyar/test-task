import { RouteProps } from "react-router-dom";
import { MainPage } from "@pages/MainPage/MainPage";
import { PokemonDetailPage } from "@pages/PokemonDetailPage";
export enum RouteNames {
  MAIN_PAGE = "/",
  POKEMON_DETAIL_PAGE = "pokemon-detail",
}

export const routes: RouteProps[] = [
  {
    path: RouteNames.MAIN_PAGE,
    element: <MainPage />,
  },
  {
    path: RouteNames.POKEMON_DETAIL_PAGE + "/:name",
    element: <PokemonDetailPage />,
  },
];
