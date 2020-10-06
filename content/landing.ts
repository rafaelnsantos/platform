import Message from 'content/animations/message.json';
import Cash from 'content/animations/piggy-bank.json';
import Design from 'content/animations/web-design-colors.json';

export const texts = [
  {
    text: 'Veja os produtos disponíveis direto do próprio celular!',
    animation: Message,
  },
  {
    text: 'Economize com confecção de cardápios!',
    animation: Cash,
  },
  {
    text: 'Altere o conteúdo do seu cardápio sempre que quiser!',
    animation: Design,
  },
];

export interface LandingText {
  text: string;
  animation: any;
}
