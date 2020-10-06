import styled from 'styled-components';
import { Text } from '@atoms';

export const FooterDesktopHeight = '5rem';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: ${FooterDesktopHeight};
`;

export const Footer = () => (
  <Container>
    <Text>Footer Desktop</Text>
  </Container>
);
