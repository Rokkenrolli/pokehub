import { Favourite } from ".prisma/client";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/client";
import { PokemonIcon } from "../../components/pokemon/PokemonIcon";
import styles from "../../styles/commons.module.css";
import prisma from "./../../lib/prisma";

interface Props {
  favourites: Favourite[];
}

const FavoritePage: NextPage<Props> = ({ favourites }) => {
  const [session, loading] = useSession();
  return (
    <div className={styles["profile-container"]}>
      {session && <h1>Your favourites, {session.user?.name}</h1>}
      {!session && <h1>Something went wrong</h1>}
      <div style={{display:"grid"}}>
      {favourites.map((f, i) => {
        return <PokemonIcon key={i} name={f.pokemonName} url={f.pokemonUrl}/>;
      })}
      {!favourites.length && <h3>You have no favourites yet, to favourite pokemon, please click the star</h3>}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { favourites: [] } };
  }

  const favourites = await prisma.favourite.findMany({
    where: {
      idUser: Number(session["userId"]),
    },
  });
  return { props: { favourites: favourites } };
};
export default FavoritePage;
