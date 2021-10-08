import classnames from "classnames";
import { useRouter } from "next/router";
import { INamedApiResource, IPokemon } from "pokeapi-typescript";
import { useEffect, useState } from "react";
import { getPokemon } from "../../pages/api/pokemon/pokeapi";
import styles from "../../styles/pokemon.module.css";

interface PokemonIconProps {
  multiselection?: boolean;
  pokemon: INamedApiResource<IPokemon>;
  multiChangeFunction?: (s: string) => boolean;
  additionalClassName?: string;
  initialSelected?: boolean;
}

export const PokemonIcon: React.FC<PokemonIconProps> = ({
  pokemon,
  multiChangeFunction,
  multiselection,
  additionalClassName = "",
  initialSelected = false,
}) => {
  const router = useRouter();
  const [iconUrl, setIconUrl] = useState("");
  const [iconId, setIconId] = useState(0);
  const [selected, setSelected] = useState(initialSelected && multiselection);

  const addPokemonInfo = async (pokemon: string) => {
    const poke = await getPokemon(pokemon);
    setIconUrl(poke.sprites.front_default);
    setIconId(poke.id);
  };
  useEffect(() => {
    addPokemonInfo(pokemon.name);
    setSelected(initialSelected && multiselection);
  }, [multiselection, pokemon.name, initialSelected]);

  const handleClick = () => {
    if (multiselection && multiChangeFunction) {
      setSelected(multiChangeFunction(pokemon.name));
    } else {
      router.push(`/pokemon/${pokemon.name}`);
    }
  };

  return (
    <div
      className={classnames(styles.pokemonIcon, {
        [additionalClassName]: additionalClassName,
        [styles.iconActive]: selected,
      })}
      onClick={() => handleClick()}
    >
      <p className={styles.iconText}>
        #{String(iconId)} {pokemon.name}
      </p>
      {iconUrl && <img width={96} height={96} src={iconUrl} alt="sprite" />}
    </div>
  );
};
