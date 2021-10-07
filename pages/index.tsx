import  {  GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import PokemonSearch from "../components/pokemon/PokemonSearch";
import commons from "../styles/commons.module.css";
import { listAll } from "./api/pokemon/pokeapi";
import { useRouter } from "next/router";
import { INamedApiResource, IPokemon } from "pokeapi-typescript";

interface Props {
  pokemon: INamedApiResource<IPokemon>[]
}

const Home: NextPage<Props> = ({pokemon}) => {
  const router = useRouter();
  return (
    <div className={commons.container}>
      <Head>
        <title>Pokehub</title>
        <meta name="description" content="Tune your pokemons with ease" />
      </Head>

      <h1>Welcome to Pokehub</h1>
      <PokemonSearch pokemonList={pokemon} useAutocomplete={true}/>
      <h3>All Pokemons</h3>
      <button
        className={commons.secondaryButton}
        onClick={() => router.push("/pokemon")}
      >
        Pokemons
      </button>
    </div>
  );
};

export const getStaticProps:GetStaticProps = async() => {

  const pokemon = await listAll()
  return {props: {pokemon: pokemon.results}}
}

export default Home;
