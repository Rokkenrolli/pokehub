import { useRouter } from "next/router";
import { INamedApiResource, IPokemon } from "pokeapi-typescript";
import { useEffect, useState } from "react";
import { getPokemon } from "../pages/api/pokemon/pokeapi";
import styles from "../styles/pokemon.module.css";

export const PokemonIcon: React.FC<INamedApiResource<IPokemon>> = (pokemon) => {
  const router = useRouter();
  const [iconUrl, setIconUrl] = useState("");

  const addPokemonIcon = async (pokemon: string) => {
    const poke = await getPokemon(pokemon);
    setIconUrl(poke.sprites.front_default);
  };
  useEffect(() => {
    addPokemonIcon(pokemon.name);
  });
  return (
    <div
      className={styles.pokemonIcon}
      onClick={() => router.push(`/pokemon/${pokemon.name}`)}
    >
      <p className={styles.iconText}>{pokemon.name}</p>
      {iconUrl && <img width={96} height={96} src={iconUrl} alt="sprite" />}
    </div>
  );
};
