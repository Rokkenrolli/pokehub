

import { useRouter } from 'next/router'
import { IPokemon } from 'pokeapi-typescript'
import { useEffect, useState } from 'react'
import { getPokemon } from '../api/pokeapi'
import styles from '../../styles/pokemon.module.css'
import { Bar } from 'react-chartjs-2';


const PokeView = ()=> {
  const router = useRouter()
  const { id } = router.query
  const [pokemons, setPokemons] = useState<IPokemon[] |undefined>(undefined)
  const [edit, setEdit] = useState(false)
  const [splitmode, setSplitMode] = useState(false)


  useEffect( () => {
    if (!id) {
      return
    }
    const inner = async () => {
       const pokemon = await getPokemon(String(id))
       setPokemons([pokemon])
    }
    inner()
    },[id])

    const barColors = [
      '#e44141',
      '#e46f41',
      '#e4b341',
      '#4195e4',
      '#41e485',
      '#be41e4',]
      const borderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ]

    return (
      <div className={styles.container}>
        {pokemons && pokemons.map(pokemon => <Pokemon pokemon={pokemon} barOptions={{barColors:barColors, barBorders: borderColor}}  />)}
      </div>
    )
}

interface PokeViewProps {
  pokemon:IPokemon
  barOptions: BarOptions
}
interface BarOptions {
  barColors: string[]
  barBorders?: string[]
}

const Pokemon:React.FC<PokeViewProps> = ({pokemon, barOptions}) => {
 
  const statData = {
    label: "ability scores",
    data: pokemon.stats.map(stat => stat.base_stat),
    backgroundColor:barOptions.barColors,
    borderColor: barOptions.barBorders 
  }

  const labels = pokemon.stats.map(stat => stat.stat.name)
  const data = {
   labels: labels,
   datasets: [statData]
  }
  return <div className= {styles['pokemon-container']}>
    <h1 className={styles.name}> Pokemon: {pokemon.name}</h1>
    <h1 className={styles.index}> # {pokemon.id}</h1>
    <h3 className={styles.height}> Height: {pokemon.height}'</h3>
    <h3 className={styles.weight}> Weight: {pokemon.weight} lbs </h3> 
    <img className={styles.image} src={pokemon.sprites.front_default} alt="sprite of the pokemon" />
    <Bar className={styles.stats} data={data}  ></Bar>
  </div>
}

export default PokeView