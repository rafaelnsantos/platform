import styled from 'styled-components';
import { Animated, Text, Icon, Space } from '@atoms';
import { links } from 'content/mobile/headerMobile';
import { FooterLinkDesktop } from '@molecules/desktop/FooterLinkDesktop';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const FooterMobileHeight = '7.5rem';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  text-align: center;
  height: ${FooterMobileHeight};
`;
const TextLinks = styled(Text)`
  padding: 50px;
`;

const StyledContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Footer = () => (
  <Container>
    <Animated>
      <TextLinks>{links.map(FooterLinkDesktop)}</TextLinks>
    </Animated>
    <Animated>
      <StyledContact>
        <Icon icon={faEnvelope} size="lg"></Icon>
        &nbsp;
        <Text>Email: redecardapio@gmail.com</Text>
      </StyledContact>
    </Animated>
  </Container>
);
