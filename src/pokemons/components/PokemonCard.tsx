"use client";

import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store";
import { RootState } from "../../store/index";
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";

interface PokemonCardProps {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state: RootState) => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();

  return (
    <Card className="hover:border-primary transition-all duration-150 ease-linear">
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
          <Link prefetch href={`pokemons/${id}`}>
            Más Información
          </Link>
        </Button>
      </CardContent>
      <CardFooter
        className="flex gap-2 items-center w-full cursor-pointer"
        onClick={() => {
          dispatch(toggleFavorite(pokemon))
        }}
      >
        {isFavorite ? (
          <>
            <IoHeart className="text-red-500" />
            <span>Es favorito</span>
          </>
        ) : (
          <>
            <IoHeartOutline className="text-red-500" />
            <span>No es favorito</span>
          </>
        )}
      </CardFooter>
    </Card>
  );
};
