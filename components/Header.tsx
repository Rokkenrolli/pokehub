import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';

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
    <nav>
      {session && <p>Hello {session.user?.name}</p>}
      {!session && <SignIn/>}
      {session && <SignOut/>}
    </nav>
  );
};

export default Header;