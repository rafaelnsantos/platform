import styled from 'styled-components';
import Lottie from '@rafaelns/react-lottie';
import { Animated, Text } from '@atoms';
import { Container } from '@material-ui/core';

export interface TextLandingProps {
  animation: any;
  text: string[];
  i?: number;
}

const Background = styled.div<{ i: number }>`
  background: ${(props) => (props.i % 2 === 0 ? 'lightblue' : 'transparent')};
`;
const AnimatedText = styled.div`
  align-items: center;
  height: 55vh;
  width: 100vw;
  display: flex;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled(Text)`
  padding: 20px 0px;
`;

const StyledContainer = styled(Container)<{ i: number }>`
  flex-direction: ${(props) => (props.i % 2 === 0 ? 'row' : 'row-reverse')};
  display: flex !important;
  align-items: center;
`;

export const TextLanding = (props: TextLandingProps) => (
  <Background i={props.i || 1}>
    <Animated>
      <AnimatedText>
        <StyledContainer maxWidth="md" i={props.i || 1}>
          <Lottie style={{ width: 300 }} source={props.animation} autoPlay />
          <TextBlock>
            {props.text.map((text, i) => (
              <StyledText key={i}>{text}</StyledText>
            ))}
          </TextBlock>
        </StyledContainer>
      </AnimatedText>
    </Animated>
  </Background>
);
