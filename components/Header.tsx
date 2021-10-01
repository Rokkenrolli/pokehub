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
      return <button onClick={() => signOut()}>
        <a>Log out</a>
        </button>
        }
    const SignIn = () => {
        return <Link href="/api/auth/signin">
        <a data-active={isActive('/signup')}>Log in</a>
      </Link>
    }
  

  return (
    <nav className={commons['header-container']}>
      {<HomeButton/>}
      <div>
      {session && <h2>Hello {session.user?.name}</h2>}
      {!session && <SignIn/>}
      {session && <SignOut/>}
      </div>
    </nav>
  );
};

export default Header;