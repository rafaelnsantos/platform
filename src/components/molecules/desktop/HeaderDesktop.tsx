import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
// import { useFirebase } from '~/providers/Firebase';
import { AppBar, Toolbar } from '@material-ui/core';
import { NavigationDesktop } from '@molecules/desktop/NavigationDesktop';
import { LogoDesktop } from '@molecules/desktop/LogoDesktop';

import { useSession, signin, signout } from 'next-auth/client';

const StyledToolbar = styled(Toolbar)`
  padding-right: ${(props) => props.theme.spacing(8)}px;
  padding-left: ${(props) => props.theme.spacing(8)}px;
  display: flex;
  justify-content: space-between;
`;

export const Header = () => {
  // const firebase = useFirebase();
  const router = useRouter();

  const [session, loading] = useSession();

  const logout = () => {
    // firebase.auth().signOut();
    router.push('/');
  };

  return (
    <>
      <AppBar>
        <StyledToolbar>
          <LogoDesktop />
          {!session && (
            <>
              Not signed in <br />
              <button onClick={() => signin('google')}>Sign in</button>
            </>
          )}
          {session && (
            <>
              Signed in as {session.user.email} <br />
              <button onClick={() => signout()}>Sign out</button>
            </>
          )}
          <NavigationDesktop logout={logout} />
        </StyledToolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
