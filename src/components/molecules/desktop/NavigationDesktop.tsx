import { LoginWithGoogle } from '@molecules/LoginWithGoogle';
import { useSession } from 'next-auth/client';
import { NavLinkDesktop } from './NavLinkDesktop';
import { UserMenu } from '@molecules/UserMenu';
import { Link } from 'content/links';

interface NavigationProps {
  links: Link[];
}

export const NavigationDesktop = ({ links }: NavigationProps) => {
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
