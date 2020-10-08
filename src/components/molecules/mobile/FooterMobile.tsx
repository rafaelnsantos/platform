import styled from 'styled-components';
import { Animated, Icon } from '@atoms';
import { FooterLinkMobile } from '@molecules/mobile/FooterLinkMobile';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FooterTemplateProps } from '@organisms/DynamicFooter';
import { FooterContainer } from '~/components/atoms/FooterContainer';

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
    <Animated>
      <TextLinks>
        {links.map((link) => (
          <FooterLinkMobile key={link.href} {...link} />
        ))}
      </TextLinks>
    </Animated>
    <hr></hr>
    <Animated>
      <StyledContact>
        <a href={`mailto:${social.email}`} target="blank">
          <Icon icon={faEnvelope} size="lg"></Icon>
        </a>
        <a href={social.instagram} target="blank">
          <Icon icon={faInstagram} size="lg"></Icon>
        </a>
        <a href={social.youtube} target="blank">
          <Icon icon={faYoutube} size="lg"></Icon>
        </a>
      </StyledContact>
    </Animated>
  </Container>
);
