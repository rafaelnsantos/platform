import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faHome, faEnvelope, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

export type Link = {
  href: string;
  text: string;
  icon?: IconDefinition;
};

export const links: Link[] = [
  {
    href: '/',
    text: 'Início',
    icon: faHome,
  },
  {
    href: '/contact',
    text: 'Contato',
    icon: faEnvelope,
  },
  {
    href: '/about',
    text: 'Sobre',
    icon: faCoffee,
  },
  {
    href: '/pricing',
    text: 'Preços',
    icon: faMoneyBill,
  },
];
