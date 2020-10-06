import { useSelector } from 'react-redux';
import { HeaderLink } from '../HeaderLink';

interface NavigationProps {
  logout: () => void;
}

export const NavigationDesktop = ({ logout }: NavigationProps) => {
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
          <HeaderLink href="/" text="Início" />
          <HeaderLink href="/contact" text="Contato" />
          <HeaderLink href="/about" text="Sobre" />
          <HeaderLink href="/pricing" text="Preços" />
          {/* <HeaderLink href="/login" text="login" /> */}
          <HeaderLink href="/register" text="Registrar-se" />
        </>
      )}
    </nav>
  );
};
