import { links } from 'content/mobile/headerMobile';
import { FooterLinkDesktop } from './FooterLinkDesktop';
import styled from 'styled-components';
import { Text } from '~/components/atoms';
import { Icon } from '~/components/atoms/Icon.tsx';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const FooterDesktopHeight = '5rem';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: ${FooterDesktopHeight};
`;
const Block = styled.div`
  padding: 30px;
  display: block;
`;

export const FooterDesktop = () => (
  <>
    <Container className="flex flex-row justify-evenly">
      <Block>{links.map(FooterLinkDesktop)}</Block>
      <Block>
        <Icon icon={faEnvelope} size={'sm'}></Icon>
        <Text>Email: redecardapio@gmail.com</Text>
      </Block>
    </Container>
  </>
);
