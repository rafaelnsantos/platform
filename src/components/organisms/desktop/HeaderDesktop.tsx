import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { useFirebase } from '~/providers/Firebase';
import { AppBar, Toolbar } from '@material-ui/core';
import { NavigationDesktop } from '@molecules/desktop/NavigationDesktop';
import { LogoDesktop } from '@molecules/desktop/LogoDesktop';

const StyledToolbar = styled(Toolbar)`
  padding-right: ${(props) => props.theme.spacing(8)}px;
  padding-left: ${(props) => props.theme.spacing(8)}px;
  display: flex;
  justify-content: space-between;
`;

export const Header = () => {
  const firebase = useFirebase();
  const router = useRouter();

  const logout = () => {
    firebase.auth().signOut();
    router.push('/');
  };

  return (
    <>
      <AppBar>
        <StyledToolbar>
          <LogoDesktop />
          <NavigationDesktop logout={logout} />
        </StyledToolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
