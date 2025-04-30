import { PokemonGrid } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites",
  description: "List of favorite pokemons",
};

export default async function PokemonssPage() {
  return (
    <div className="flex flex-col">
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
