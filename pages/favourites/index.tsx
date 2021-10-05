import { Favourite } from ".prisma/client";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/client";
import styles from "../../styles/commons.module.css";
import prisma from "./../../lib/prisma";

interface Props {
  favourites: Favourite[];
}

const FavoritePage: NextPage<Props> = ({ favourites }) => {
  const [session, loading] = useSession();
  return (
    <div className={styles["profile-container"]}>
      {session && <h1>Hello {session.user?.name}</h1>}
      {!session && <h1>Something went wrong</h1>}
      {favourites.map((f, i) => {
        return <h1 key={i}>{f.pokemonName}</h1>;
      })}
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
