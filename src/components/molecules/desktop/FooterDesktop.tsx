import { FooterLinkDesktop } from './FooterLinkDesktop';
import styled from 'styled-components';
import { Text } from '~/components/atoms';
import { Icon } from '~/components/atoms/Icon.tsx';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FooterTemplateProps } from '@organisms/DynamicFooter';
import { FooterContainer } from '~/components/atoms/FooterContainer';

export const FooterDesktopHeight = '10rem';

const Container = styled(FooterContainer)`
  height: ${FooterDesktopHeight};
`;
const Block = styled.div`
  padding: 30px;
  display: block;
`;

export const FooterDesktop = (props: FooterTemplateProps) => (
  <Container className="flex flex-row justify-evenly">
    <Block>
      {props.links.map((link) => (
        <FooterLinkDesktop key={link.href} {...link} />
      ))}
    </Block>
    <Block>
      <Icon icon={faEnvelope} size={'sm'}></Icon>
      <Text>{props.social.email}</Text>
    </Block>
  </Container>
);
