import { useSelector } from 'react-redux';
import { HeaderLink } from './HeaderLink';

interface HeaderProps {
  logout: () => void;
}

export const HeaderDesktop = ({ logout }: HeaderProps) => {
  const user = useSelector((state) => state.user.email);

  return (
    <nav className="flex flex-row">
      {user ? (
        <>
          <HeaderLink href="/dashboard" text="dashboard" />
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <>
          <HeaderLink href="/" text="home" />
          <HeaderLink href="/contact" text="contact" />
          <HeaderLink href="/about" text="about" />
          <HeaderLink href="/pricing" text="pricing" />
          <HeaderLink href="/login" text="login" />
          <HeaderLink href="/register" text="register" />
        </>
      )}
    </nav>
  );
};
