import styled from 'styled-components';
import Lottie from '@rafaelns/react-lottie';
import { Text } from '@atoms';

export interface TextLandingProps {
  animation: any;
  text: string;
  i?: number;
}

const Test = styled.div<{ i: number }>`
  height: 55vh;
  background: ${(props) => (props.i % 2 === 0 ? 'lightblue' : 'transparent')};
  display: flex;
  flex-direction: ${(props) => (props.i % 2 === 0 ? 'row' : 'row-reverse')};
  align-items: center;
  ${(props) => (props.i % 2 === 0 ? 'margin-right' : 'margin-left')}: 5px;
  margin: 0;
`;

export const TextLanding = (props: TextLandingProps) => (
  <Test i={props.i || 1}>
    <Lottie style={{ width: 300 }} source={props.animation} autoPlay />
    <Text>{props.text}</Text>
  </Test>
);
