import styled from 'styled-components';
import { Animated, Text, Icon } from '@atoms';
import { links } from 'content/mobile/headerMobile';
import { FooterLinkMobile } from '@molecules/mobile/FooterLinkMobile';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const FooterMobileHeight = '15rem';

const Container = styled.footer`
  background: gray;
  color: whitesmoke;
  position: absolute;
  bottom: 0;
  width: 100vw;
  text-align: center;
  height: ${FooterMobileHeight};
  display: flex;
  flex-direction: column;
`;
const TextLinks = styled(Text)`
  border-spacing: 10px;
`;

const StyledContact = styled.div`
  color: whitesmoke;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px;
`;
export const Footer = () => (
  <Container>
    <Animated>
      <TextLinks>{links.map(FooterLinkMobile)}</TextLinks>
    </Animated>
    <hr></hr>
    <Animated>
      <StyledContact>
        <a href="mailto:redecardapio@gmail.com" target="blank">
          <Icon icon={faEnvelope} size="lg"></Icon>
        </a>
      </StyledContact>
    </Animated>
  </Container>
);
