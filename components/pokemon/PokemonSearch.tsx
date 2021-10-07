import { useRouter } from "next/router";
import { INamedApiResource, IPokemon } from "pokeapi-typescript";
import { useRef, useState } from "react";
import commons from "../../styles/commons.module.css";

interface SearchProps {
  pokemonList?: INamedApiResource<IPokemon>[]
  useAutocomplete?: boolean
  searchText?: string
}

const PokemonSearch:React.FC<SearchProps> = ({pokemonList = [], useAutocomplete=false,searchText = "Let's fly!"}) => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const [pokemons, setPokemons] = useState<INamedApiResource<IPokemon>[]>([])



  const handleValueChange = (s:string) => {
      const search = s.trim()
      if (!search) {
        setUrl("")
        setPokemons([])
        return
      }
      const newPokemon = pokemonList.filter(p=> p.name.slice(0,search.length).toLowerCase() === search.toLowerCase())
      setPokemons(newPokemon)
      setUrl(s)
  }

  const Autocomplete = () => {
    const handleAutoClick = (pokemon:string) => {
      setPokemons([])
      handleClick(pokemon)
    }

    return<div className={commons.autocompleteContainer}>
      {pokemons.map((p,i) => {
        return <p className={commons.autocompleterow} key={i} onClick={() => handleAutoClick(p.name)}>{p.name}</p>
      })}
    </div>
  }

  const handleClick = (search:string) => {
    const parsed = search.trim();
    if (!parsed) {
      return;
    }
    router.push(`/pokemon/${id ? id + "," : ""}${parsed}`);
    setUrl("");
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick(url);
    }
  };



  return (
    <div className={commons["search-container"]}>
      <div style={{display:"grid",position:"relative"}}>
      <input
        type="text"
        placeholder="Search for a pokemon"
        onChange={(e) => handleValueChange(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
        value={url}
      />
      {(useAutocomplete && pokemons.length>0) &&<Autocomplete/>}
      </div>
      <button
        className={commons.button}
        disabled={Boolean(!url)}
        onClick={() => handleClick(url)}
      >
        {searchText}
      </button>
    </div>
  );
};

export default PokemonSearch;
