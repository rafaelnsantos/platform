import { LoginWithGoogle } from '@molecules/LoginWithGoogle';
import { links } from 'content/mobile/headerMobile';
import { useSession, signIn } from 'next-auth/client';
import { NavLinkDesktop } from './NavLinkDesktop';
import { UserMenu } from '@molecules/UserMenu';

export const NavigationDesktop = () => {
  const [session] = useSession();

  return (
    <nav className="flex flex-row items-center">
      <UserMenu />
      {!session && (
        <>
          {links.map((link) => (
            <NavLinkDesktop key={link.href} {...link} />
          ))}
          <LoginWithGoogle />
        </>
      )}
    </nav>
  );
};
