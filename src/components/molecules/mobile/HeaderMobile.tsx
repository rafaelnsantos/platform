import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { AppBar, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import { NavigationMobile } from '@molecules/mobile/NavigationMobile';
import { LogoMobile } from '@molecules/mobile/LogoMobile';

const StyledToolbar = styled(Toolbar)`
  padding-right: ${(props) => props.theme.spacing(4)}px;
  padding-left: ${(props) => props.theme.spacing(4)}px;
  display: flex;
  justify-content: space-between;
`;

export const Header = () => {
  const router = useRouter();
  const trigger = useScrollTrigger();
  const logout = () => {
    router.push('/');
  };

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
          <StyledToolbar>
            <LogoMobile />
            <NavigationMobile logout={logout} />
          </StyledToolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
};
