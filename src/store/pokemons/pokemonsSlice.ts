import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritePokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): FavoritePokemonsState => {
//   // if (typeof localStorage === "undefined") return {};
//   const favorites = JSON.parse(
//     localStorage.getItem("favorite-pokemons") ?? "{}"
//   );
//   return favorites;
// };

const initialState: FavoritePokemonsState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons: (
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) => {
      state.favorites = action.payload;
    },

    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }
      //todo: nunca realizar esto en Redux!!
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { setFavoritePokemons, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
