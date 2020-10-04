import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { useFirebase } from '~/providers/Firebase';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core';
import Link from 'next/link';

import { Text } from '@atoms';
import { HeaderDesktop } from '@molecules/HeaderDesktop';
import { HeaderMobile } from '@molecules/HeaderMobile';

const StyledToolbar = styled(Toolbar)<{ mobile: boolean }>`
  padding-right: ${(props) => props.theme.spacing(props.mobile ? 4 : 16)}px;
  padding-left: ${(props) => props.theme.spacing(props.mobile ? 4 : 16)}px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 80px;
`;

export const Header = () => {
  const firebase = useFirebase();
  const router = useRouter();
  const match = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });

  const logout = () => {
    firebase.auth().signOut();
    router.push('/');
  };

  return (
    <>
      <AppBar>
        <StyledToolbar mobile={match}>
          <Link href="/">
            <a style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Logo src="/img/cross_paper.png" />
              <Text className="flex flex-1">Rede Cardápio</Text>
            </a>
          </Link>
          {match ? <HeaderMobile logout={logout} /> : <HeaderDesktop logout={logout} />}
        </StyledToolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
