import { Session } from "next-auth";
import classnames from "classnames";
import { IPokemon } from "pokeapi-typescript";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import styles from "../styles/pokemon.module.css";
import { isFavourite, unfavourite } from "../pages/api/pokemon/pokeapi";

export interface BarOptions {
  barColors: string[];
  barBorders?: string[];
}
export interface PokeViewProps {
  session?: Session;
  pokemon: IPokemon;
  barOptions: BarOptions;
  editMode?: boolean;
  favorited?: boolean;
}
const Pokemon: React.FC<PokeViewProps> = ({
  pokemon,
  barOptions,
  editMode,
  favorited,
  session,
}) => {
  const [pokemonData, setPokemonData] = useState<IPokemon>(pokemon);
  const [favorite, setFavorited] = useState(favorited);

  useEffect(() => {
    const fetchData = async () => {
      const fav = await isFavourite(pokemon.id);
      console.log(fav);
      setFavorited(fav);
    };
    fetchData();
  });

  const changeValue = (e: string | null, key: string) => {
    if (!e) {
      return;
    }
    const keys = key.split(",").map((k) => k.trim());
    console.log(keys);
    console.log(e);
  };

  const setFavorite = async (fav: boolean) => {
    console.log("setting favourite to ", fav);
    setFavorited(fav);
    if (fav) {
      try {
        const body = { id: pokemon.id, name: pokemon.name, url: "" };
        await fetch("/api/post", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      unfavourite(pokemon.id);
    }
  };

  const statData = {
    label: "ability scores",
    data: pokemonData.stats.map((stat) => stat.base_stat),
    backgroundColor: barOptions.barColors,
    borderColor: barOptions.barBorders,
  };

  const labels = pokemonData.stats.map((stat) => stat.stat.name);
  const data = {
    labels: labels,
    datasets: [statData],
  };
  return (
    <div className={styles["pokemon-container"]}>
      {session && (
        <div
          className={classnames(styles.fav, {
            [styles.star]: favorite,
          })}
          onClick={async () => await setFavorite(!favorite)}
        ></div>
      )}

      <h1 className={styles.name}>
        {" "}
        <span
          onBlur={(e) => changeValue(e.currentTarget.textContent, "name")}
          className={editMode ? styles.textActive : ""}
          contentEditable={editMode}
        >
          {pokemonData.name}
        </span>
      </h1>
      <h1 className={styles.index}> #{pokemonData.id}</h1>
      <h3 className={styles.height}>
        {" "}
        Height:{" "}
        {
          <span
            className={editMode ? styles.textActive : ""}
            contentEditable={editMode}
          >
            {pokemonData.height}
          </span>
        }
        &#39;
      </h3>
      <h3 className={styles.weight}>
        {" "}
        Weight:{" "}
        {
          <span
            className={editMode ? styles.textActive : ""}
            contentEditable={editMode}
          >
            {pokemonData.weight}
          </span>
        }{" "}
        lbs{" "}
      </h3>
      <img
        className={styles.image}
        src={pokemonData.sprites.front_default}
        alt="sprite of the pokemon"
      />
      <div className={styles.abilities}>
        <h2>Abilities</h2>
        <p>
          *(<i>Hidden ability</i>)
        </p>
        <div className={styles.abilitiesContainer}>
          {pokemonData.abilities.map((a, i) => (
            <h4 key={i}>
              <span
                className={editMode ? styles.textActive : ""}
                contentEditable={editMode}
              >
                {a.ability.name}
                {a.is_hidden && "*"}
              </span>
            </h4>
          ))}
        </div>
      </div>
      <div className={styles.type}>
        <h2>Types</h2>
        <div className={styles.abilitiesContainer}>
          {pokemonData.types.map((t, i) => (
            <h4 key={i}>
              <span
                className={editMode ? styles.textActive : ""}
                contentEditable={editMode}
              >
                {t.type.name}
              </span>
            </h4>
          ))}
        </div>
      </div>

      <Bar className={styles.stats} data={data}></Bar>
    </div>
  );
};

export default Pokemon;
