import { Avatar } from '@atoms';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { MouseEvent, useState } from 'react';
import { useSession, signOut } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';

export function UserMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [session] = useSession();
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    signOut();
    handleClose();
  };

  if (!session) return <></>;

  return (
    <>
      <button onClick={handleClick}>
        <Avatar size={40} src={session.user.image} />
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </>
  );
}
