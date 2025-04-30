import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pokemon } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const staticPokemons = Array.from({ length: 151 }).map((v, i) => `${i + 1}`);

  return staticPokemons.map((id) => ({ id: id }));
}

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  try {
    const { id } = await props.params;
    const { id: idPokemon, name } = await getPokemon(id);

    return {
      title: `#${idPokemon} - ${name}`,
      description: `${name} pokemon page`,
    };
  } catch (error) {
    return {
      title: "Pokemon not found",
      description: error as string,
    };
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "force-cache",
    }).then((res) => res.json());

    return data;
  } catch (error) {
    console.error("Error fetching pokemon data:", error);
    notFound();
  }
};

export default async function PokemonPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const pokemon = await getPokemon(id);

  return (
    <div className="flex justify-center items-center">
      <Card className="w-1/2 max-w-1/2">
        <CardHeader>
          <CardTitle>{pokemon.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Image
            src={pokemon.sprites.other?.dream_world.front_default ?? ""}
            width={150}
            height={150}
            alt={`Imagen del pokemon ${pokemon.name}`}
          />
          <Accordion
            type="multiple"
            defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Pokemon Movements</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap">
                  {pokemon.moves.map((move) => (
                    <p key={move.move.name} className="mr-2 capitalize">
                      {move.move.name}
                    </p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Types</AccordionTrigger>
              <AccordionContent>
                <div className="text-base font-medium text-navy-700 flex">
                  {pokemon.types.map((type) => (
                    <p key={type.slot} className="mr-2 capitalize">
                      {type.type.name}
                    </p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Weight</AccordionTrigger>
              <AccordionContent>
                <span className="text-base font-medium text-navy-700 flex">
                  {pokemon.weight}
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Regular Sprites</AccordionTrigger>
              <AccordionContent>
                <div className="flex justify-center">
                  <Image
                    src={pokemon.sprites.front_default}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />

                  <Image
                    src={pokemon.sprites.back_default}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Shiny Sprites</AccordionTrigger>
              <AccordionContent>
                <div className="flex justify-center">
                  <Image
                    src={pokemon.sprites.front_shiny}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />

                  <Image
                    src={pokemon.sprites.back_shiny}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
