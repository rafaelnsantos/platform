import Message from 'content/animations/message.json';
import Cash from 'content/animations/piggy-bank.json';
import Design from 'content/animations/web-design-colors.json';

export const texts = [
  {
    text: [
      'Automatize os seus pedidos!',
      'Veja os produtos disponíveis direto do próprio celular!',
      'Rede Cardápio funciona com um garçom online!',
    ],
    animation: Message,
  },
  {
    text: ['Economize com confecção de cardápios!', 'Sem custo para alteração de cardápio!'],
    animation: Cash,
  },
  {
    text: [
      'Altere o conteúdo do seu cardápio sempre que quiser!',
      'Cadastre seu estabelecimento, imprima os QR Codes, coloque nas mesas e pronto!',
    ],
    animation: Design,
  },
];

export interface LandingText {
  text: string;
  animation: any;
}
