import { IconButton, Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Link } from 'content/links';
import { useSession, signOut } from 'next-auth/client';
import { useState } from 'react';
import { NavLinkMobile } from './NavLinkMobile';

interface NavigationProps {
  links: Link[];
}

export const NavigationMobile = ({ links }: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const [session] = useSession();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen} color="inherit" edge="end" aria-label="menu">
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <div style={{ width: 300 }}>
          {session ? (
            <>
              <NavLinkMobile href="/dashboard" text="dashboard" />
              <button onClick={() => signOut()}>logout</button>
            </>
          ) : (
            <>{links.map(NavLinkMobile)}</>
          )}
        </div>
      </Drawer>
    </div>
  );
};
