import { IconButton, Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';

interface HeaderProps {
  logout: () => void;
}

export const HeaderMobile = (props: HeaderProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen} color="inherit" edge="end" aria-label="menu">
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <div style={{ width: 300 }} />
      </Drawer>
    </div>
  );
};
