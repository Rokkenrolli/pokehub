import { useRouter } from "next/router";
import HomeButton from "./HomeButton";
import commons from "../styles/commons.module.css";
import PokemonSearch from "./PokemonSearch";

export const PageTools: React.FC = ({ children }) => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  return (
    <div className={commons["container-flex"]}>
      {!isActive("/") && <HomeButton additionalClassname="home-button" />}
      {children}
    </div>
  );
};
