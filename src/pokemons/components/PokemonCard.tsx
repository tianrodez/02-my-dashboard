import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoHeartOutline } from "react-icons/io5";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;

  return (
    <Card className="hover:border-primary transition-all duration-150 ease-linear cursor-pointer">
      <CardContent className="flex flex-col items-center justify-center gap-2">
        <Image
          key={id}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          width={100}
          height={100}
          alt={name}
          priority={false}
        />
        <span>{name}</span>
        <Button variant={"outline"} className="w-full">
          <Link prefetch href={`pokemons/${id}`}>Más Información</Link>
        </Button>
      </CardContent>
      <CardFooter className="flex gap-2 items-center w-full">
        <IoHeartOutline className="text-red-500" />
        <div className="flex flex-col items-start justify-center gap-1">
          <span>No es favorito</span>
          <small>Nop</small>
        </div>
      </CardFooter>
    </Card>
  );
};
