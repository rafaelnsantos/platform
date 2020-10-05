import { IconButton, Drawer } from '@material-ui/core';
import { HeaderLink } from './HeaderLink';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  faCoffee,
  faHome,
  faEnvelope,
  faMoneyBill,
  faKey,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  logout: () => void;
}

const links = [
  {
    href: '/',
    text: 'Início',
    icon: faHome,
  },
  {
    href: '/contact',
    text: 'Contato',
    icon: faEnvelope,
  },
  {
    href: '/about',
    text: 'Sobre',
    icon: faCoffee,
  },
  {
    href: '/pricing',
    text: 'Preços',
    icon: faMoneyBill,
  },
  {
    href: '/login',
    text: 'Entrar',
    icon: faKey,
  },
  {
    href: '/register',
    text: 'Registre-se',
    icon: faLock,
  },
];

export const HeaderMobile = ({ logout }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useSelector((state) => state.user.email);
  return (
    <div>
      <IconButton onClick={handleOpen} color="inherit" edge="end" aria-label="menu">
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <div style={{ width: 300, borderWidth: '2px' }}>
          {user ? (
            <>
              <HeaderLink href="/dashboard" text="dashboard" />
              <button onClick={logout}>logout</button>
            </>
          ) : (
            <>
              {links.map(HeaderLink)}
              {/*               
              <HeaderLink href="/" text="Inicío" icon=""/>
              <HeaderLink href="/contact" text="Contato" />
              <HeaderLink href="/about" text="Sobre" />
              <HeaderLink href="/pricing" text="Preços" />
              <hr></hr>
              <HeaderLink href="/login" text="Login" />
              <HeaderLink href="/register" text="Registre-se" /> */}
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
};
