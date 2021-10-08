import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import { INamedApiResource, IPokemon } from "pokeapi-typescript";
import { useState } from "react";
import styles from "../../styles/pokemon.module.css";
import { listAll } from "../api/pokemon/pokeapi";
import commons from "../../styles/commons.module.css";
import classnames from "classnames";
import { PokemonIcon } from "../../components/pokemon/PokemonIcon";

export interface PokemonProps {
  pokemons: INamedApiResource<IPokemon>[];
  pageSize?: number;
  startPage?: number;
  title?: string;
}

const PokemonHome: NextPage<PokemonProps> = ({
  pokemons,
  pageSize = 100,
  startPage = 0,
  title = "Pokemons",
}) => {
  const [search, setSearch] = useState("");
  const [visiblePokemons, setPokemon] =
    useState<INamedApiResource<IPokemon>[]>(pokemons);

  //console.log("pokemons", pokemons, visiblePokemons, startPage, pageSize);
  const [page, setPage] = useState(startPage);
  const lastPageNumber = Math.floor(visiblePokemons.length / pageSize);

  const handlePageChange = (pageNumber: number) => {
    const clamped = Math.max(0, Math.min(pageNumber, lastPageNumber));
    setPage(clamped);
  };

  interface PageProps {
    pageNumber: number;
    text: string;
    disabled?: boolean;
  }
  const NextPage: React.FC<PageProps> = ({ pageNumber, text, disabled }) => {
    return (
      <button
        onClick={() => handlePageChange(pageNumber)}
        className={classnames(commons.button, { [commons.disabled]: disabled })}
      >
        {text}
      </button>
    );
  };

  const PageChanger = () => {
    return (
      <div className={classnames(commons.flex, commons.pageContainer)}>
        <NextPage
          disabled={page <= 0}
          pageNumber={page - 1}
          text={"Previous Page"}
        />
        <p>
          {page + 1} ... {lastPageNumber + 1}
        </p>

        <NextPage
          disabled={page >= lastPageNumber}
          pageNumber={page + 1}
          text={"Next Page"}
        />
      </div>
    );
  };

  const handleFilter = (value: string) => {
    const trimmed = value.toLowerCase().trim();
    const newPokemon = pokemons.filter((p) => {
      return p.name.toLowerCase().includes(trimmed);
    });
    setPage(0);
    setSearch(trimmed);
    setPokemon(newPokemon);
  };

  return (
    <div style={{ display: "grid" }}>
      <h2 style={{ justifySelf: "center", fontSize: "28px" }}> {title}</h2>
      <PageChanger />
      <input
        className={commons.filter}
        type="text"
        placeholder="filter pokemon"
        onChange={(e) => handleFilter(e.target.value)}
        value={search}
      />
      <div className={styles.iconContainer}>
        {visiblePokemons
          .slice(
            page * pageSize,
            Math.min(page * pageSize + pageSize, pokemons.length)
          )
          .map((pokemon, i) => (
            <PokemonIcon key={i} {...pokemon} />
          ))}
      </div>
      <PageChanger />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pokemon = await listAll();
  return { props: { pokemons: pokemon.results } };
};

export default PokemonHome;
