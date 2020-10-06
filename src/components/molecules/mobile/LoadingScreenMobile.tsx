import styled from 'styled-components';
import { Loading } from '@atoms';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 85vh;
`;

export const LoadingScreenMobile = () => (
  <Container>
    <Loading width="300px" />
  </Container>
);
