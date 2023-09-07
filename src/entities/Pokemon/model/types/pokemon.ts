export interface PokemonState {
  searchTerm: string;
  nextUrl: string | null;
  prevUrl: string | null;
  currentPage: string | null;
}

export interface PokemonRequest {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
  id: number;
}

export interface Ability {
  ability: {
    name: string;
  };
}

export interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}
export interface Type {
  type: {
    name: string;
  };
}
export interface PokemonDetail {
  abilities: Ability[];
  name: string;
  weight: number;
  height: 7;
  id: number;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}
