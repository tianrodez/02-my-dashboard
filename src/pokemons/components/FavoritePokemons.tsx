"use client";

import { RootState, useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state: RootState) =>
    Object.values(state.pokemons.favorites)
  );

  return favoritePokemons.length ? (
    <PokemonGrid pokemons={favoritePokemons} />
  ) : (
    <NoFavorites />
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <h1>no hayy</h1>
    </div>
  );
};
