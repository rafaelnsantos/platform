import styled from 'styled-components';
import { Animated, Text } from '@atoms';
import { links } from 'content/mobile/headerMobile';
import { FooterLinkDesktop } from '@molecules/desktop/FooterLinkDesktop';

export const FooterMobileHeight = '7.5rem';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  text-align: center;
  height: ${FooterMobileHeight};
`;
const Links = styled(Text)`
  padding: 50px;
`;
export const Footer = () => (
  <Container>
    <Animated>
      <Text>{links.map(FooterLinkDesktop)}</Text>
    </Animated>
  </Container>
);
