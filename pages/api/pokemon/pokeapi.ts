
import PokeAPI, { IPokemon } from "pokeapi-typescript";

export const getPokemon = async( pokemonString: string) => {
    const pokemons:IPokemon[] = []
    pokemonString.split(',').forEach(async (p,i) => {
        const pokemon = await PokeAPI.Pokemon.resolve(p.trim())
        pokemons[i] = (pokemon)
    })
    console.log(pokemons)
    return pokemons
}
