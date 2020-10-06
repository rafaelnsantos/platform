import styled from 'styled-components';
import { Text } from '@atoms';

export const FooterMobileHeight = '7.5rem';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: ${FooterMobileHeight};
`;

export const Footer = () => (
  <Container>
    <Text>Footer Mobile</Text>
  </Container>
);
