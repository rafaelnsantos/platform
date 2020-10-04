import { IconButton, Drawer } from '@material-ui/core';
import { HeaderLink } from './HeaderLink';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
interface HeaderProps {
  logout: () => void;
}

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
        <div style={{ width: 300 }}>
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
        </div>
      </Drawer>
    </div>
  );
};
