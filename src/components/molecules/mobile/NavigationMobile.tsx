import { IconButton, Drawer } from '@material-ui/core';
import { HeaderLink } from '../HeaderLink';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLinkMobile } from './NavLinkMobile';
import { links } from 'content/mobile/headerMobile';

interface NavigationProps {
  logout: () => void;
}

export const NavigationMobile = ({ logout }: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.email);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen} color="inherit" edge="end" aria-label="menu">
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <div style={{ width: 300 }}>
          {user ? (
            <>
              <NavLinkMobile icon={null} href="/dashboard" text="dashboard" />
              <button onClick={logout}>logout</button>
            </>
          ) : (
            <>{links.map(NavLinkMobile)}</>
          )}
        </div>
      </Drawer>
    </div>
  );
};
