import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";
import HomeButton from "../buttons/HomeButton";
import commons from "../../styles/commons.module.css";
import { Profile } from "./Profile";
import { PageTools } from "./PageTools";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
  const [session, loading] = useSession();

  const SignIn = () => {
    return (
      <button className={commons.button} onClick={() => signIn()}>Sign In</button>
    );
  };

  return (
    <div className={commons["header-container"]}>
      <PageTools />
      {session && <Profile profile={session} />}
      {!session && <SignIn />}
    </div>
  );
};

export default Header;
