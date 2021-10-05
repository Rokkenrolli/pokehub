import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import { useRouter } from "next/router";
import { INamedApiResource, IPokemon } from "pokeapi-typescript";
import { useState } from "react";
import styles from "../../styles/pokemon.module.css";
import { listAll } from "../api/pokemon/pokeapi";
import commons from "../../styles/commons.module.css";
import classnames from "classnames";
import { PokemonIcon } from "../../components/PokemonIcon";

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
  const [visiblePokemons, setPokemon] = useState<INamedApiResource<IPokemon>[]>(
    pokemons.slice(
      startPage * pageSize,
      Math.min(startPage * pageSize + pageSize, pokemons.length)
    )
  );
  //console.log("pokemons", pokemons, visiblePokemons, startPage, pageSize);
  const [page, setPage] = useState(startPage);
  const lastPageNumber = Math.floor(pokemons.length / pageSize);

  const handlePageChange = (pageNumber: number) => {
    const clamped = Math.max(0, Math.min(pageNumber, lastPageNumber));
    setPage(clamped);
    setPokemon(
      pokemons.slice(clamped * pageSize, clamped * pageSize + pageSize)
    );
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
        <p>{page}</p>

        <NextPage
          disabled={page >= lastPageNumber}
          pageNumber={page + 1}
          text={"Next Page"}
        />
      </div>
    );
  };

  return (
    <div style={{ display: "grid" }}>
      <h2 style={{ justifySelf: "center", fontSize: "28px" }}> {title}</h2>
      <PageChanger />

      <div className={styles.iconContainer}>
        {visiblePokemons.map((pokemon, i) => (
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
