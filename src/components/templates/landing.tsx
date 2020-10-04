import Message from 'content/animations/message.json';
import Cash from 'content/animations/piggy-bank.json';
import Design from 'content/animations/web-design-colors.json';
import Lottie from '@rafaelns/react-lottie';
import { Text } from '@atoms';
import styled from 'styled-components';
import { Header } from '@organisms/Header';
import { AboutTemplate } from './about';
import { ContactTemplate } from './contact';
import { PricingTemplate } from './pricing';
import { Animated } from '../atoms/Animated';
const Test = styled.div<{ i: number }>`
  height: 55vh;
  background: ${(props) => (props.i % 2 === 0 ? 'lightblue' : 'transparent')};
  display: flex;
  flex-direction: ${(props) => (props.i % 2 === 0 ? 'row' : 'row-reverse')};
  align-items: center;
  ${(props) => (props.i % 2 === 0 ? 'margin-right' : 'margin-left')}: 5px;
  margin: 0;
`;

export function LandingTemplate() {
  return (
    <div>
      <Header />
      <Animated>
        <Test i={1}>
          <Lottie style={{ width: 300 }} source={Message} autoPlay />
          <Text>Veja os produtos disponíveis direto do prórpio celular!</Text>
        </Test>
      </Animated>
      <Animated>
        <Test i={2}>
          <Lottie style={{ width: 300 }} source={Cash} autoPlay />
          <Text>Economize com confecção de cardápios!</Text>
        </Test>
      </Animated>
      <Animated>
        <Test i={3}>
          <Lottie style={{ width: 300 }} source={Design} autoPlay />
          <Text>Altere o conteúdo do seu cardápio sempre que quiser!</Text>
        </Test>
      </Animated>

      <AboutTemplate />
      <ContactTemplate />
      <PricingTemplate />
    </div>
  );
}
