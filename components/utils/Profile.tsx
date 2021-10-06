import classnames from "classnames";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import commons from "../../styles/commons.module.css";

interface ProfileProps {
  profile: Session;
}

export const Profile: React.FC<ProfileProps> = ({ profile }) => {
  const router = useRouter();
  const [isOpen, toggleOpen] = useState(false);
  const [firstTimeClicked, setClicked] = useState(false);
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const handleToggle = () => {
    !firstTimeClicked && setClicked(true);
    toggleOpen(!isOpen);
  };
  useEffect(() => {
    setClicked(false);
    toggleOpen(false);
  }, [router.pathname]);
  const SignOut = () => {
    return (
      <button
        className={classnames(commons.button, commons.end)}
        onClick={() => signOut()}
      >
        <a>Log out</a>
      </button>
    );
  };

  const ProfileScreen = () => {
    return (
      <div
        className={classnames(commons.profile, {
          [commons.closed]: !isOpen,
          [commons.hidden]: !firstTimeClicked,
        })}
      >
        <Link href={"/favourites"}>
          <a>Favourites</a>
        </Link>
        <SignOut />
      </div>
    );
  };

  return (
    <div className={commons.profileSub}>
      <label htmlFor="profile-picture">{profile.user?.name}</label>
      <div className={commons["profile-container"]}>
        <img
          id="profile-picture"
          onClick={() => handleToggle()}
          className={commons["profile-pic"]}
          src={profile.user?.image || ""}
          alt="Profile picture"
        ></img>
        <ProfileScreen />
      </div>
    </div>
  );
};
