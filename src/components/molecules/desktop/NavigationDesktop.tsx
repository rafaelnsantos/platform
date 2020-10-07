import { LoginWithGoogle } from '@molecules/LoginWithGoogle';
import { links } from 'content/mobile/headerMobile';
import { useSession, signIn, signOut } from 'next-auth/client';
import { NavLinkDesktop } from './NavLinkDesktop';
import { Avatar } from '@atoms';

export const NavigationDesktop = () => {
  const [session, loading] = useSession();

  return (
    <nav className="flex flex-row items-center">
      {session && (
        <button onClick={() => signOut()}>
          <Avatar size={40} src={session.user.image} />
        </button>
      )}
      {!session && (
        <>
          {links.map(NavLinkDesktop)}

          <button onClick={() => signIn('google')}>
            <LoginWithGoogle />
          </button>
        </>
      )}
    </nav>
  );
};
