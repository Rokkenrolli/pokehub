import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import PokemonSearch from '../components/PokemonSearch'
import commons from  '../styles/commons.module.css'

const Home: NextPage = () => {
  
  return (
    
    <div className={commons.container}>
      <Head>
        <title>Pokehub</title>
        <meta name="description" content="Tune your pokemons with ease" />
      </Head>


        <h1>
          Welcome to Pokehub
        </h1>
   
        <PokemonSearch /> 

        
    </div>
  )
}

export default Home
