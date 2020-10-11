import styled from 'styled-components';
import { Icon } from '@atoms';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { SocialMedia } from 'content/social';

const StyledContact = styled.div`
  color: whitesmoke;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 30px;
`;
interface ContactProps {
  social: SocialMedia;
}
export const Contact = ({ social }: ContactProps) => (
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
);
