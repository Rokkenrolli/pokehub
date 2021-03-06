import { Favourite } from ".prisma/client";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/client";
import Link from "next/link";
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
      {!session && (
        <h1>
          Please sign in to see your favourites
          <Link href="/">
            <a className={styles.button}>Home</a>
          </Link>
        </h1>
      )}
      <div style={{ display: "grid", gridAutoFlow: "column", margin: "1em" }}>
        {favourites.map((f, i) => {
          return (
            <PokemonIcon
              key={i}
              pokemon={{ name: f.pokemonName, url: f.pokemonUrl }}
            />
          );
        })}
        {session && !favourites.length && (
          <h3>
            You have no favourites yet, to favourite pokemon, please click the
            star
          </h3>
        )}
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
