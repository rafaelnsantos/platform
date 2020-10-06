import { links } from 'content/mobile/headerMobile';
import { useSelector } from 'react-redux';
import { NavLinkDesktop } from './NavLinkDesktop';

interface NavigationProps {
  logout: () => void;
}

export const NavigationDesktop = ({ logout }: NavigationProps) => {
  const user = useSelector((state) => state.user.email);

  return (
    <nav className="flex flex-row">
      {user ? (
        <>
          <NavLinkDesktop href="/dashboard" text="dashboard" />
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <>{links.map(NavLinkDesktop)}</>
      )}
    </nav>
  );
};
