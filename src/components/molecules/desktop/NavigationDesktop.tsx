import { LoginWithGoogle } from '@molecules/LoginWithGoogle';
import { links } from 'content/mobile/headerMobile';
import { useSession } from 'next-auth/client';
import { NavLinkDesktop } from './NavLinkDesktop';
import { UserMenu } from '@molecules/UserMenu';

export const NavigationDesktop = () => {
  const [session] = useSession();

  return (
    <nav className="flex flex-row items-center">
      {session && <NavLinkDesktop href="/dashboard" text="Dashboard" />}
      <UserMenu />
      {!session && links.map((link) => <NavLinkDesktop key={link.href} {...link} />)}
      <LoginWithGoogle />
    </nav>
  );
};
