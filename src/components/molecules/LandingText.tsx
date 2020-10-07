import styled from 'styled-components';
import Lottie from '@rafaelns/react-lottie';
import { Animated, Text } from '@atoms';

export interface TextLandingProps {
  animation: any;
  text: string[];
  i?: number;
}

const Background = styled.div<{ i: number }>`
  background: ${(props) => (props.i % 2 === 0 ? 'lightblue' : 'transparent')};
`;
const AnimatedText = styled.div<{ i: number }>`
  flex-direction: ${(props) => (props.i % 2 === 0 ? 'row' : 'row-reverse')};
  ${(props) => (props.i % 2 === 0 ? 'margin-right' : 'margin-left')}: 5px;
  display: flex;
  align-items: center;
  height: 55vh;
  width: 100vw;
  margin: 0;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled(Text)`
  padding: 20px;
`;

export const TextLanding = (props: TextLandingProps) => (
  <Background i={props.i || 1}>
    <Animated>
      <AnimatedText i={props.i || 1}>
        <Lottie style={{ width: 300 }} source={props.animation} autoPlay />
        <TextBlock>
          {props.text.map((text, i) => (
            <StyledText key={i}>{text}</StyledText>
          ))}
        </TextBlock>
      </AnimatedText>
    </Animated>
  </Background>
);
