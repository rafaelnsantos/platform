import styled from 'styled-components';
import { Animated, Icon } from '@atoms';
import { FooterLinkMobile } from '@molecules/mobile/FooterLinkMobile';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FooterTemplateProps } from '@organisms/DynamicFooter';
import { FooterContainer } from '~/components/atoms/FooterContainer';
import { Contact } from '@molecules/Contact';

export const FooterMobileHeight = '15rem';

const Container = styled(FooterContainer)`
  text-align: center;
  height: ${FooterMobileHeight};
  display: flex;
  flex-direction: column;
`;
const TextLinks = styled.div`
  border-spacing: 10px;
`;

const StyledContact = styled.div`
  color: whitesmoke;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 30px;
`;

export const FooterMobile = ({ social, links }: FooterTemplateProps) => (
  <Container>
    <TextLinks>
      {links.map((link) => (
        <FooterLinkMobile key={link.href} {...link} />
      ))}
    </TextLinks>
    <hr></hr>
    <Contact social={social} />
  </Container>
);
