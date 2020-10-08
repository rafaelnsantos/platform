import styled from 'styled-components';
import { AppBar, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import { NavigationMobile } from '@molecules/mobile/NavigationMobile';
import { LogoMobile } from '@molecules/mobile/LogoMobile';
import { HeaderTemplateProps } from '@organisms/DynamicHeader';

const StyledToolbar = styled(Toolbar)`
  padding-right: ${(props) => props.theme.spacing(4)}px;
  padding-left: ${(props) => props.theme.spacing(4)}px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderMobile = (props: HeaderTemplateProps) => {
  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
          <StyledToolbar>
            <LogoMobile />
            <NavigationMobile links={props.links} />
          </StyledToolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
};
