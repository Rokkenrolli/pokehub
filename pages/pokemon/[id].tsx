

import { useRouter } from 'next/router'
import { IPokemon } from 'pokeapi-typescript'
import { useEffect, useState } from 'react'
import { getPokemon } from '../api/pokemon/pokeapi'
import styles from '../../styles/pokemon.module.css'
import { Bar } from 'react-chartjs-2';


const PokeView = ()=> {
  const router = useRouter()
  const { id } = router.query
  const [pokemons, setPokemons] = useState<IPokemon[] |undefined>(undefined)
  const [edit, setEdit] = useState(false)


  useEffect( () => {
    if (!id) {
      return
    }
    console.log(id)
    const inner = async () => {
       const pokemon = await getPokemon(String(id))
       setPokemons(pokemon)
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
      <div>
      <div className={styles.container}>
        <div style={{flex:0,display:'flex'}}>
        <input id="editToggle" type="checkbox" onClick={() => setEdit(!edit)} />
        <label htmlFor="editToggle">Toggle edit mode</label>
        </div>

        {pokemons && pokemons.map((pokemon,i) => <Pokemon key={i} editMode={edit} pokemon={pokemon} barOptions={{barColors:barColors, barBorders: borderColor}}  />)}
      </div>
      </div>
    )
}

interface PokeViewProps {
  pokemon:IPokemon
  barOptions: BarOptions
  editMode?:boolean
}
interface BarOptions {
  barColors: string[]
  barBorders?: string[]
}

const Pokemon:React.FC<PokeViewProps> = ({pokemon, barOptions, editMode}) => {
  const [pokemonData,setPokemonData] = useState<IPokemon>(pokemon)

  const changeValue = (e:string | null)=> {
    if (!e) {
      return
    }
    console.log(e)
  }

  const statData = {
    label: "ability scores",
    data: pokemonData.stats.map(stat => stat.base_stat),
    backgroundColor:barOptions.barColors,
    borderColor: barOptions.barBorders 
  }

  const labels = pokemonData.stats.map(stat => stat.stat.name)
  const data = {
   labels: labels,
   datasets: [statData]
  }
  return <div className= {styles['pokemon-container']}>
    <h1 className={styles.name}> Pokemon: <span onBlur={(e) => changeValue(e.currentTarget.textContent) } className={editMode ? styles.textActive:""} contentEditable={editMode}>{pokemonData.name}</span></h1>
    <h1 className={styles.index}> #{pokemonData.id}</h1>
    <h3 className={styles.height}> Height: {<span className={editMode ? styles.textActive:""} contentEditable={editMode}>{pokemonData.height}</span>}&#39;</h3>
    <h3 className={styles.weight}> Weight: {<span className={editMode ? styles.textActive:""} contentEditable={editMode}>{pokemonData.weight}</span>} lbs </h3> 
    <img className={styles.image} src={pokemonData.sprites.front_default} alt="sprite of the pokemon" />
    <Bar className={styles.stats} data={data}></Bar>
  </div>
}

export default PokeView