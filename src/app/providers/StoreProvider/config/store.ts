import { pokemonReducer } from "@entities/Pokemon";
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api/rtk/baseApi";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([baseApi.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
