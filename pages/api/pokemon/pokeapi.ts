
import PokeAPI, { IPokemon } from "pokeapi-typescript";

const baseUrl =process.env.NODE_ENV === "development"?"http://localhost:3000" :`https://pokehub-silk.vercel.app`

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


export const unfavourite = async (id:number) => {
        await fetch(`${baseUrl}/api/post/${id}`, {
          method: 'DELETE',
        });
}

export const favourite = async(id:number, name:string, url:string) => {
    try {
        const body = { id: id, name: name, url: url };
        await fetch(`${baseUrl}/api/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } catch (error) {
        console.error(error);
      }
}
export const isFavourite = async (id:number):Promise<boolean> => {
    const res = await fetch(`${baseUrl}/api/favourite/${id}`)
    const body = await res.json()

    
    return body.isFavourite
}


