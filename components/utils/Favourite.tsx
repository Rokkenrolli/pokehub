import classnames from "classnames"
import { useSession } from "next-auth/client"
import { useState, useEffect } from "react"
import { isFavourite, unfavourite } from "../../pages/api/pokemon/pokeapi"
import styles from "../../styles/pokemon.module.css"

export interface FavouriteProps {
    pokemonId:number
    name:string
}

const Favourite:React.FC<FavouriteProps> = ({pokemonId, name}) => {
    const session = useSession()
    const [favorite, setFavorited] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
          const fav = await isFavourite(pokemonId);
          console.log(fav);
          setFavorited(fav);
        };
        fetchData();
      });

    const setFavorite = async (fav: boolean) => {
        console.log("setting favourite to ", fav);
        if (fav) {
          try {
            const body = { id: pokemonId, name: name, url: "" };
            await fetch("/api/post", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            });
          } catch (error) {
            console.error(error);
          }
        } else {
          await unfavourite(pokemonId);
        }
        setFavorited(await isFavourite(pokemonId))
      };


    return (<>
    {session && (
        <div
          className={classnames(styles.fav, {
            [styles.star]: favorite,
          })}
          onClick={async () => await setFavorite(!favorite)}
        ></div>
      )}
      </>)

}

export default Favourite