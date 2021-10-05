import { useRouter } from "next/router";
import { IPokemon } from "pokeapi-typescript";
import { Component, useEffect, useState } from "react";
import { getPokemon, isFavourite, listAll } from "../api/pokemon/pokeapi";
import styles from "../../styles/pokemon.module.css";
import { useSession } from "next-auth/client";
import Pokemon from "../../components/Pokemon";
import PokemonSearch from "../../components/PokemonSearch";

const PokeView = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [edit, setEdit] = useState(false);
  const [session, loading] = useSession();

  useEffect(() => {
    if (!id) {
      return;
    }

    console.log(id);
    const inner = async () => {
      const pokes = await Promise.allSettled(
        String(id)
          .split(",")
          .map(async (p) => await getPokemon(String(p)))
      );
      const filtered: IPokemon[] = [];
      pokes.forEach((p, i) => {
        if (p.status === "fulfilled") {
          filtered.push(p.value);
        }
      });

      setPokemons(filtered);
    };
    inner();
  }, [id]);

  const barColors = [
    "#e44141",
    "#e46f41",
    "#e4b341",
    "#4195e4",
    "#41e485",
    "#be41e4",
  ];
  const borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ];
  const foundPokemon = Boolean(pokemons && pokemons.length);
  // console.log(`foundpokemon ${foundPokemon}`);
  return foundPokemon ? (
    <div>
      <div style={{ padding: "1em" }}>
        <div className={styles.edit}>
          <input
            id="editToggle"
            type="checkbox"
            onClick={() => setEdit(!edit)}
          />
          <label htmlFor="editToggle">Toggle edit mode</label>
        </div>
        <PokemonSearch />
      </div>

      <div className={styles.container}>
        {pokemons?.map((pokemon, i) => {
          if (!pokemon) {
            return;
          }
          return (
            <Pokemon
              session={session ?? undefined}
              key={i}
              editMode={edit}
              pokemon={pokemon}
              barOptions={{ barColors: barColors, barBorders: borderColor }}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div style={{ padding: "3em" }}>
      <h1>We did not find any pokemon, please check your search</h1>
      <PokemonSearch />
    </div>
  );
};

export default PokeView;
