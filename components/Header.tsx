import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';
import HomeButton from './HomeButton';
import commons from  '../styles/commons.module.css'

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const [session, loading] = useSession();

  const SignOut = () => { 
      return <button className={commons.button} onClick={() => signOut()}>
        <a>Log out</a>
        </button>
        }
    const SignIn = () => {
        return <Link href="/api/auth/signin">
        <a className={commons.button} data-active={isActive('/signup')}>Log in</a>
      </Link>
    }
  

  return (
    <div className={commons['header-container']}>
      {!isActive('/') &&<HomeButton additionalClassname="home-button"/>}
      {session && <h4>{session.user?.name}</h4>}
      {session && <img className={commons['profile-pic']} src={session.user?.image ||""} alt="Profile picture"></img>}
      {!session && <SignIn/>}
      {session && <SignOut/>}
    </div>
  );
};

export default Header;