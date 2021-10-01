
import PokeAPI from "pokeapi-typescript";

export const getPokemon = async( pokemon: string) => {
    const response = await PokeAPI.Pokemon.resolve(pokemon);
    return response
}
