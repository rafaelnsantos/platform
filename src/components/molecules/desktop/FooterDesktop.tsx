import { links } from 'content/mobile/headerMobile';
import { FooterLinkDesktop } from './FooterLinkDesktop';

import styled from 'styled-components';

export const FooterDesktopHeight = '5rem';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: ${FooterDesktopHeight};
`;

export const FooterDesktop = () => (
  <Container className="flex flex-row">{links.map(FooterLinkDesktop)}</Container>
);
