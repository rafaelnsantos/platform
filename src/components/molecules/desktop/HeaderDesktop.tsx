import styled from 'styled-components';
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
  return (
    <>
      <AppBar>
        <StyledToolbar>
          <LogoDesktop />
          <NavigationDesktop />
        </StyledToolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
