import styled from 'styled-components';
import { Text } from '@atoms';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
`;

export const Footer = () => (
  <Container>
    <Text>Footer Desktop</Text>
  </Container>
);
