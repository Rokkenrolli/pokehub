import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import PokemonSearch from "../components/PokemonSearch";
import commons from "../styles/commons.module.css";
import { listAll } from "./api/pokemon/pokeapi";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={commons.container}>
      <Head>
        <title>Pokehub</title>
        <meta name="description" content="Tune your pokemons with ease" />
      </Head>

      <h1>Welcome to Pokehub</h1>
      <button
        className={commons.button}
        onClick={() => router.push("/pokemon")}
      >
        Pokemons
      </button>
      <PokemonSearch />
    </div>
  );
};

export default Home;
