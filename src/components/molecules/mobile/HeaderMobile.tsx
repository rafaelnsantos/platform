import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { useFirebase } from '~/providers/Firebase';
import { AppBar, Toolbar } from '@material-ui/core';
import { NavigationMobile } from '@molecules/mobile/NavigationMobile';
import { LogoMobile } from '@molecules/mobile/LogoMobile';

const StyledToolbar = styled(Toolbar)`
  padding-right: ${(props) => props.theme.spacing(4)}px;
  padding-left: ${(props) => props.theme.spacing(4)}px;
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
          <LogoMobile />
          <NavigationMobile logout={logout} />
        </StyledToolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
