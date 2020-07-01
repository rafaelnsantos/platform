import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { useFirebase } from '~/providers/Firebase';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core';

import { Text } from '@atoms';
import { HeaderDesktop } from '@molecules/HeaderDesktop';
import { HeaderMobile } from '@molecules/HeaderMobile';

const StyledToolbar = styled(Toolbar)<{ mobile: boolean }>`
  padding-right: ${(props) => props.theme.spacing(props.mobile ? 4 : 16)}px;
  padding-left: ${(props) => props.theme.spacing(props.mobile ? 4 : 16)}px;
`;

export const Header = () => {
  const user = useSelector((state) => state.user.email);
  const firebase = useFirebase();
  const router = useRouter();
  const match = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });

  const logout = () => {
    firebase.auth().signOut();
    router.push('/');
  };

  return (
    <AppBar>
      <StyledToolbar mobile={match}>
        <Text className="flex flex-1">Title</Text>
        {match ? <HeaderMobile /> : <HeaderDesktop />}
      </StyledToolbar>
    </AppBar>
  );
};
