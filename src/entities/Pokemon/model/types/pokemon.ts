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
