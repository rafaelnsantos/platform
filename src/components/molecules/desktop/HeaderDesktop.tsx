import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';
import { NavigationDesktop } from './NavigationDesktop';
import { LogoDesktop } from '@molecules/desktop/LogoDesktop';
import { HeaderTemplateProps } from '@organisms/DynamicHeader';

const StyledToolbar = styled(Toolbar)`
  padding-right: ${(props) => props.theme.spacing(8)}px;
  padding-left: ${(props) => props.theme.spacing(8)}px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderDesktop = (props: HeaderTemplateProps) => {
  return (
    <>
      <AppBar>
        <StyledToolbar>
          <LogoDesktop />
          <NavigationDesktop links={props.links} />
        </StyledToolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
