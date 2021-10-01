import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Header from '../components/Header'

const Home: NextPage = () => {
  const [url, setUrl] = useState("")
  return (
    
    <div>
      <Head>
        <title>Pokehub</title>
        <meta name="description" content="Tune your pokemons with ease" />
      </Head>


        <h1>
          Welcome to Pokehub
        </h1>
          <input type="text" onChange={(e) => setUrl(e.target.value)}/>
          <Link href={`/pokemon/${url}`}><a> We are flying to {`/pokemon/${url}`}</a></Link>


        
    </div>
  )
}

export default Home
