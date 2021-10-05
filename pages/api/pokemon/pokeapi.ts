
import PokeAPI, { IPokemon } from "pokeapi-typescript";

export const getPokemons = async( pokemonString: string) => {
    const pokemons:IPokemon[] = []
    pokemonString.split(',').forEach(async (p,i) => {
        const pokemon = await PokeAPI.Pokemon.resolve(p.trim())
        pokemons[i] = (pokemon)
    })
    console.log(pokemons)
    return pokemons
}

export const getPokemon = async(pokestring:string) => {
    const pokemon = await PokeAPI.Pokemon.resolve(pokestring.trim());
    return pokemon
}


export const listAll = async () => {
    const all = await PokeAPI.Pokemon.listAll()
    return all;
}
