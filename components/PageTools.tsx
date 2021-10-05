import { useRouter } from "next/router";
import HomeButton from "./buttons/HomeButton";
import commons from "../styles/commons.module.css";
import BackButton from "./buttons/BackButton";

export const PageTools: React.FC = ({ children }) => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  return (
    <div className={commons["container-flex"]}>
      {!isActive("/") && <HomeButton additionalClassname="home-button" />}
      {!isActive("/") && <BackButton />}
      {children}
    </div>
  );
};
