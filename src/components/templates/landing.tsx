import Message from 'content/animations/message.json';
import Cash from 'content/animations/piggy-bank.json';
import Design from 'content/animations/web-design-colors.json';
import Lottie from '@rafaelns/react-lottie';
import { Text } from '@atoms';
import styled from 'styled-components';
import { Header } from '@organisms/Header';

const Test = styled.div<{ i: number }>`
  height: 95vh;
  background: ${(props) => (props.i % 2 === 0 ? 'white' : 'gray')};
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
      <Test i={0}>
        <Lottie style={{ width: 300 }} source={Cash} autoPlay />
        <Text>Sem taxas por pedidos, preço fixo mensal</Text>
      </Test>
      <Test i={1}>
        <Lottie style={{ width: 300 }} source={Message} autoPlay />
        <Text>Receba seus pedidos no Whatsapp</Text>
      </Test>
      <Test i={2}>
        <Lottie style={{ width: 300 }} source={Design} autoPlay />
        <Text>Design do seu jeito</Text>
      </Test>
    </div>
  );
}
