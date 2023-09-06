import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PokemonState } from "../types/pokemon";
const initialState: PokemonState = {
  searchTerm: "",
  nextUrl: null,
  prevUrl: null,
  currentPage: null,
};
export const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },

    setNextUrl: (state, action: PayloadAction<string>) => {
      state.nextUrl = action.payload;
    },

    setPrevUrl: (state, action: PayloadAction<string | null>) => {
      state.prevUrl = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<string | null>) => {
      state.currentPage = action.payload;
    },
  },
});

export const pokemonActions = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
