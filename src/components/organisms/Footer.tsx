import styled from 'styled-components';
import { Text } from '@atoms';

const Container = styled.footer`
  background: ${(props) => props.theme.colors.secondary};
`;

export const Footer = () => (
  <Container>
    <Text>Footer</Text>
  </Container>
);
