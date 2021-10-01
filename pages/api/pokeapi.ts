
import PokeAPI from "pokeapi-typescript";

export const getPokemon = async( pokemon: string) => {
    const response = Promise.all(pokemon.split(',').map(async p => await PokeAPI.Pokemon.resolve(p.trim())));
    return response
}
